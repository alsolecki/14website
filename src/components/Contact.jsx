import React from 'react'

const PNG_FILE_URL = 'src/assets/SoleckiResume.pdf'

const Contact = () => {

  const downloadFileAtURL=(url)=>{
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  };


  return (
    <div className="contact inactive">
        <div className="expand">
          <p>Alex Solecki</p>
          <p>Washington DC Area</p>
          <a href="mailto:alsolecki@gmail.com"><p>alsolecki@gmail.com</p></a>
          <a href="https://github.com/alsolecki"><p>github.com/alsolecki</p></a>
        </div>
        <button onClick={()=>{downloadFileAtURL(PNG_FILE_URL)} }>Resume
          
        </button>
    </div>
  )
}

export default Contact