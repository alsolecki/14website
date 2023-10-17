import React from 'react'
import './Cartoon.css'

const Cartoon = () => {
  return (
    <div className="cartoon">
        <div className="hair"></div>
        <div className="head">
          <div className="face">
            <div className="eyes">
              <div className="eyebrow eyebrow-leftA"></div>
              <div className="eyebrow eyebrow-leftB"></div>
              <div className="eye eye-left">
                <div className="eye-color eye-color-left"></div>
              </div>
              <div className="eyebrow eyebrow-rightA"></div>
              <div className="eyebrow eyebrow-rightB"></div>
              <div className="eye eye-right">
                <div className="eye-color eye-color-right"></div>
              </div>
            </div>
            <div className="nose">
              <div className="nose-nostril-left"></div>
              <div className="nose-nostril-right"></div>
              <div className="nose-tip"></div>

            </div>

            <div className="mouth">
              <div className="lip top-lip"></div>
              <div className="lip bottom-lip-right"></div>
              <div className="lip bottom-lip-left"></div>
            </div>
          </div>
        </div>
        <div className="neck"></div>
        <div className="body">

        </div>
    </div>
  )
}

export default Cartoon