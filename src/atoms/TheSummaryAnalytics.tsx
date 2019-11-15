import React, { useCallback, useMemo, useState } from 'react'

import { localStorageSave, localStorageLoad } from './../_helpers/localStorage'

const LOCAL_STORAGE_KEY = 'full rows checkbox state'

const TheSummaryAnalytics = ({ data }) => {
  const [fullRowsOnly, setFullRowsOnly] = useState(localStorageLoad(LOCAL_STORAGE_KEY) || false)
  const handleCheckbox = useCallback(() => {
    const newValue = !fullRowsOnly
    localStorageSave(LOCAL_STORAGE_KEY, newValue, false)
    setFullRowsOnly(newValue)
  }, [fullRowsOnly, setFullRowsOnly])

  const getRevenue = useCallback(id => parseInt(localStorageLoad(id) )|| -1, [])

  const parsedData = useMemo(() => {
    const displayData = { countedRecords: 0, averageMileage: -1, averageRevenue: -1 }
    const tempData = { distance: 0, revenue: 0 }
    const tempCounts = { distance: 0, revenue: 0, tempData }
      data.forEach(({ distanceDrove, id }) => {
      const revenue: number = getRevenue(id)
      if(fullRowsOnly) {
        if (distanceDrove > 0 && revenue > 0) {
          displayData.countedRecords++
          tempCounts.distance++
          tempData.distance += distanceDrove
          tempCounts.revenue++
          tempData.revenue += revenue
        }
      } else if(distanceDrove > 0 || revenue > 0) {
        displayData.countedRecords++
        if (distanceDrove) {
          tempCounts.distance++
          tempData.distance += distanceDrove
        }
        if (revenue) {
          tempCounts.revenue++
          tempData.revenue += revenue
        }
      }
    })
      displayData.averageMileage = +(tempData.distance / tempCounts.distance).toFixed(2)
      displayData.averageRevenue = +(tempData.revenue / tempCounts.revenue).toFixed(2)
      return displayData
  }, [data, fullRowsOnly, getRevenue])

  console.log({ data, parsedData })

  return parsedData.countedRecords === 0
    ? <React.Fragment />
    : <React.Fragment>
        <table border="4" style={{width:'100%'}}>
          <caption>
            <h1>Analytitiks</h1>
            <label>
              <input type="checkbox" checked={fullRowsOnly} onChange={handleCheckbox} />
              <span>Only calculate when <span role="img" aria-label="Mileage">🛣️</span> <strong>and</strong> <span role="img" aria-label="Revenue">💰</span> have values. Otherwise, calculate when either is present.</span>
            </label>
          </caption>
          <thead>
            <tr>
              <th>#</th>
              <th><span role="img" aria-label="Mileage">🛣️</span></th>
              <th><span role="img" aria-label="Revenue">💰</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{parsedData.countedRecords}</td>
              <td>{parsedData.averageMileage}</td>
              <td>{parsedData.averageRevenue}</td>
            </tr>
          </tbody>
      </table>
    </React.Fragment>
}

export default TheSummaryAnalytics
