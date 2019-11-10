import React, { useState } from 'react'

import DataTable from './../organisms/DataTable'
import MarkDropZone from './../atoms/MarkDropZone'

import {parseDatFile} from './../_helpers/parseDatFile'

const HomeLayout = () => {
  const [fileData, setFileData] = useState({})
  
  const host = parseDatFile(fileData.as_host)
  // const traveler = parseDatFile(fileData.as_traveler, false)

  return <React.Fragment>
    <MarkDropZone setFileData={setFileData} />
    {/* <DataTable label="Traveler" tabularData={traveler} /> */}
    <DataTable label="Host" tabularData={host} />

  </React.Fragment>
}

export default HomeLayout
