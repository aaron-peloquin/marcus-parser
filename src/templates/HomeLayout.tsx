import React, { useState, useCallback } from 'react'

import Dropzone from 'react-dropzone'
import DataTable from './../organisms/DataTable'

import {parseDatFile} from './../_helpers/parseDatFile'

const droppedMyZoneStyles = {
  border:'dashed 4px orange',
  margin: '0 4px 44px 4px',
  padding: '0 44px',
  textAlign:'center',
  cursor: 'pointer',
}

const HomeLayout = () => {
  const [fileData, setFileData] = useState({})
  
  const onDrop = useCallback(newFiles => {
    const newFile = newFiles[0]
    const whatYouReadinFor = new FileReader()

    if (newFile.name==='reservations.json') {
      whatYouReadinFor.onload = (() => e => {
        try {
          const jason = JSON.parse(e.target.result);
          setFileData(jason)
        } catch (ex) {
          alert('Error trying to parse JSON. Maybe download it from remote again?');
        }
      })();
      whatYouReadinFor.readAsText(newFile)
    } else { alert('wrong file, bro, I want "reservations.json"') }
  }, [setFileData])

  // const [host, traveler] = parseDatFile(fileData)
  const host = parseDatFile(fileData.as_host)
  console.log({host})

  return <React.Fragment>
    <Dropzone onDrop={onDrop}>
      {({getRootProps, getInputProps}) => (
        <section style={droppedMyZoneStyles}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>You may drag and or maybe drop some filez right over 'ere. You can also <strong>click</strong> to select files with your native web browsers file picker functionality that is baked into the browser okay</p>
          </div>
        </section>
      )}
    </Dropzone>
    <DataTable label="Host" tabularData={[]} />
  </React.Fragment>
}

export default HomeLayout
