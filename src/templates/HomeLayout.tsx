import React, { useState, useCallback } from 'react'

import Dropzone from 'react-dropzone'
import DataTable from './../organisms/DataTable'

const HomeLayout = ({}) => {
  const [fileData, setFileData] = useState()
  const onDrop = useCallback(acceptedFiles => {
    console.log({ acceptedFiles })
    setFileData('hi')
  }, [setFileData])

  return <React.Fragment>
    <h1>Oh Hi Mark</h1>
    return <Dropzone onDrop={onDrop} />
    <DataTable tabularData={fileData} />
  </React.Fragment>
}

export default HomeLayout
