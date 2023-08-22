import React from 'react'
import ProjectA from './ProjectA.jsx'
import ProjectB from './ProjectB.jsx'
import ProjectC from './ProjectC.jsx'
import Spacer from './Spacer.jsx'

const Content = () => {
  return (
    <div className="main">
        <ProjectA />
        <Spacer />
        <ProjectB />
        <Spacer />
        <ProjectC /> 
    </div>
  )
}

export default Content