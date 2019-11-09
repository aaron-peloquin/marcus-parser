import React, { useState } from 'react'

import Dropzone from './../atoms/Dropzone'
import DataTable from './../organisms/DataTable'

const HomeLayout = ({}) => {
  const [fileData, setFileData] = useState()

  return <React.Fragment>
    <h1>Oh Hi Mark</h1>
    <Dropzone setFileData={setFileData} />
    <DataTable tabularData={fileData} />
  </React.Fragment>
}

export default HomeLayout
