import React, { useState, useCallback } from 'react'

import { localStorageSave, localStorageLoad } from './../_helpers/localStorage'

interface Props {
  rowData: {
    currentStartDate: string
    reservationUrl: string
    distanceDrove: number
    protection_level: string
    id: string
  }
}

const DataRow = ({ rowData }: React.FC<Props>) => {
  const {
    currentStartDate,
    reservationUrl,
    distanceDrove,
    protection_level,
    id,
  } = rowData || {}

  const [bigMoney, setBigMoney] = useState(localStorageLoad(id) || 0)

  const updateBigMoney = useCallback(e => {
    console.log(e)
    const { value = 0 } = (e || {}).target
    localStorageSave(id, value, false)
    console.log(value)
    setBigMoney(value)
  }, [setBigMoney, id])

  return <tr>
    <td>{currentStartDate}</td>
    <td><a href={reservationUrl}>{reservationUrl}</a></td>
    <td>{distanceDrove}</td>
    <td>{protection_level}</td>
    <td><input value={bigMoney} type="number" onChange={updateBigMoney} /></td>
  </tr>
}

export default DataRow
