import React from 'react'

import DataRow from './../molecules/DataRow'

const DataTable = ({label="", tabularData = []}) => {
  if(!tabularData) {
    return <h2>Please upload your reservations json file</h2>
  }

  return <table border="1" style={{width: '100%'}}>
    <caption>{label} Data Summary</caption>
    <thead>
      <tr>
        <th>Dayte</th>
        <th>Lynk</th>
        <th>Distaence</th>
        <th>Protection Level?</th>
        <th>Earn'ins</th>
      </tr>
    </thead>
    <tbody>
      {tabularData.map(rowData => {
        const {id} = rowData
        return <DataRow key={id} rowData={rowData} />
      })}
    </tbody>
  </table>
}

export default DataTable
