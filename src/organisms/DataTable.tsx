import React from 'react'

import DataRow from './../molecules/DataRow'

const DataTable = ({tabularData = []}) => {
  if(!tabularData) {
    return <h2>Please upload your reservations json file</h2>
  }

  return <table>
    <caption>Rental Details</caption>
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    {tabularData.map(rowData => <DataRow rowData={rowData} />)}
    <tbody>

    </tbody>
  </table>
}

export default DataTable
