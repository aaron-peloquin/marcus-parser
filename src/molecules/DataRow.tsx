import React from 'react'

const DataRow = ({rowData}) => {
  // console.log({ rowData })
  return <tr>
    <td>{rowData.currentStartDate}</td>
    <td><a href={rowData.reservationUrl}>{rowData.reservationUrl}</a></td>
    <td>{rowData.distanceDrove}</td>
    <td>{rowData.protection_level}</td>
  </tr>
}

export default DataRow
