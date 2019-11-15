import React, { useState } from 'react'

import HomeLayout from './../templates/HomeLayout'

export const NewRenderContext = React.createContext(() => {})

const HomeRoute = () => {
  const [numForcedRender, setNumForcedRender] = useState(0)
  const triggerNewRender = () => {
    const newNumberOfRenders = numForcedRender + 1
    console.log({ newNumberOfRenders })
    setNumForcedRender(newNumberOfRenders)
  }

  return <NewRenderContext.Provider value={{numForcedRender, triggerNewRender}}>
    <HomeLayout />
  </NewRenderContext.Provider>
}

export default HomeRoute
