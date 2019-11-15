import React, { useCallback, useMemo, useState } from 'react'

import { localStorageSave, localStorageLoad } from './../_helpers/localStorage'

const LOCAL_STORAGE_KEY = 'full rows checkbox state'

const TheSummaryAnalytics = ({ data }) => {
  const [fullRowsOnly, setFullRowsOnly] = useState(localStorageLoad(LOCAL_STORAGE_KEY) || false)
  const handleCheckbox = useCallback(() => {
    const newValue = !fullRowsOnly
    localStorageSave(LOCAL_STORAGE_KEY, newValue, false)
    setFullRowsOnly(newValue)
  })

  const displayData = {
    countedRecords: 0,
    averageMileage: -1,
    averageRevenue: -1,
  }

  const getRevenue = useCallback(id => parseInt(localStorageLoad(id) )|| -1)

  const parseFullRows = useMemo(() => {
    data.map(({ distanceDrove, id }) => {
      const revenue: number = getRevenue(id)
      console.log({ AARON: revenue })
    })

  })

  const parseParitalRows = useMemo(() => {
    data.map(({ distanceDrove, id }) => {
      const revenue: number = getRevenue(id)
      console.log({ AARON: revenue })
    })
  })

  const parseData = useMemo(() => data.map(reservation => {
    const { distanceDrove, id } = reservation
    const revenue: number = localStorageLoad(id) || 0
    const addValues = (partialOk=false) => {
      displayData.countedRecords++
      if(partialOk || distanceDrove) { displayData.averageMileage += distanceDrove }
      if(partialOk || revenue) { displayData.averageRevenue += revenue }
    }
    if (fullRowsOnly && distanceDrove && revenue) { addValues() }
    if (!fullRowsOnly && (distanceDrove || revenue)) { addValues(true) }
  }), [data, fullRowsOnly])

  console.log({ data, displayData })

  return <React.Fragment>
    <label>
      <input type="checkbox" checked={fullRowsOnly} onChange={handleCheckbox} />
      <span>Only calculate when 🛣️ <strong>&</strong> 💰</span> have values. Otherwise, calculate when either is present.
    </label>
    <table>
      <caption>Analytitiks</caption>
    <tr>
      <td>#</td>
      <td></td>
      <td></td>
    </tr>
  </table>
  </React.Fragment>
}

export default TheSummaryAnalytics
