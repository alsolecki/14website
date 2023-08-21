import React from 'react'
import ProjectA from './ProjectA.jsx'
import ProjectB from './ProjectB.jsx'
import ProjectC from './ProjectC.jsx'
import Spacer from './Spacer.jsx'

const Content = () => {
  return (
    <main className="main">
        <ProjectA />
        <Spacer />
        <ProjectB />
        <Spacer />
        <ProjectC /> 
    </main>
  )
}

export default Content