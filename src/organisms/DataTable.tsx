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
        <th><span role="img" aria-label="Date">📅</span></th>
        <th><span role="img" aria-label="Reservation link">🔗</span></th>
        <th><span role="img" aria-label="Distance">🛣️</span></th>
        <th><span role="img" aria-label="Revenue">💰</span></th>
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
