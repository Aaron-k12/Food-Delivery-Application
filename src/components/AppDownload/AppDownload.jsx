import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'


function AppDownload() {
    return (
    <div className="app-download" id="app-download">
        <p>For better Experience Download <br /> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="playstore_image" />
            <img src={assets.app_store} alt="appstore_image" />
        </div>
    </div>
  )
}

export default AppDownload