import React from 'react'

import './PopupForm.css'

const PopupForm = ({ closeWindow, isVisible, header, children, type }) => (
  <div className={`disable-bg ${isVisible}`}>
    <div className={`popup ${type}-popup ${isVisible} `}>
      <i className="ion-close-round popup-exit-icon" onClick={closeWindow} />
      <div>
        <header className="form-header">
          <h3>{ header }</h3>
        </header>
        { children }
        <footer className={`${type}-footer`}></footer>
      </div>
    </div>
  </div>
)


export default PopupForm