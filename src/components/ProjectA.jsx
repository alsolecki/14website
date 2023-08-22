import React from 'react'
import htmlSVG from './html-file-icon.svg'
import cssSVG from './css-file-icon.svg'


const ProjectA = () => {
  return (
    <section>
        <div className="content">
        <h1>1</h1>
        <span className="icons">
          <h2>SoFoCo Dems</h2>
          <img src={ htmlSVG } alt="HTML Icon" width="20px" height="20px"/>
          <img src={ cssSVG } alt="CSS Icon" width="20px" height="20px"/>
        </span>
        <h4>A Neighborhood Flier</h4>
        <p>
            Lorem sit do proident veniam anim aute commodo nostrud fugiat sunt ipsum. Dolore excepteur laboris cillum commodo id fugiat. Nulla eiusmod fugiat esse do commodo amet ipsum esse in nisi aute voluptate officia. Pariatur pariatur voluptate ut est ipsum enim officia eiusmod.
        </p>
        <h4>Beyond Printing</h4>
        <p>
            Ad duis labore do laborum excepteur aliquip eu laboris ullamco culpa Lorem aliqua. Consequat irure reprehenderit adipisicing sint deserunt irure esse ullamco magna cillum minim consectetur. Consequat tempor aliqua ad aute reprehenderit veniam et voluptate. Enim reprehenderit ex enim duis cillum ad eiusmod magna elit. 
        </p>
        <h4>Bringing People Together</h4>
        <p>
            Est consectetur voluptate aute ex est sunt aute. Eiusmod ullamco ea ad aliqua enim do enim elit excepteur pariatur. Anim eiusmod ex amet laborum ut irure cillum enim ullamco dolore. Enim incididunt ut aliquip anim sunt magna.
        </p>


    </div>
    </section>
  )
}

export default ProjectA