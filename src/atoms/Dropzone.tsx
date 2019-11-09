import React, { useCallback } from 'react'
import ReactDropzone from 'react-dropzone'

interface Props {
  setFileData: () => null
}

const Dropzone = ({setFileData}):Props => {
  const onDrop = useCallback(acceptedFiles => {
    console.log({ acceptedFiles })
    setFileData('hi')
  }, [])

  return <ReactDropzone onDrop={onDrop} />
}

export default Dropzone
