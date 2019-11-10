import React from 'react'

import DataRow from './../molecules/DataRow'

const DataTable = ({label="", tabularData = []}) => {
  if(!tabularData) {
    return <h2>Please upload your reservations json file</h2>
  }

  return <table border="1" style={{width: '100%'}}>
    <caption>{label} Details</caption>
    <thead>
      <tr>
        <th>Dryver</th>
        <th>Distaence</th>
        <th>Earn'ins</th>
      </tr>
    </thead>
    {tabularData.map(rowData => <DataRow rowData={rowData} />)}
    <tbody>

    </tbody>
  </table>
}

export default DataTable
