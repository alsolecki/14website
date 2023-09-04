import React from 'react'

const Contact = () => {
  return (
    <div className="contact inactive">
        <div className="expand">
          <p>Alex Solecki</p>
          <p>Washington DC Area</p>
          <a href="mailto:alsolecki@gmail.com"><p>alsolecki@gmail.com</p></a>
          <a href="https://github.com/alsolecki"><p>github.com/alsolecki</p></a>
        </div>
        <button>
          <a href="/Solecki Resume.pdf" download>Resume
          </a>
        </button>
    </div>
  )
}

export default Contact