import React from 'react'
import udenlogo from '../../../assets/uden-logo.png'
import './Header.scss'
const Header = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4">
                <img src={udenlogo} alt="udenlogo" className="uden-logo" />
            </div>
            <div className="col-md-8 text-right p-3">
                <a href="/" className="text-warning h5 p-4">How it works</a>
                <a href="/" className="text-warning h5 p-4">Programs</a>
                <a href="/" className="text-warning h5 p-4">Resources</a>
                <a href="/" className="text-warning h5 p-4">Pricing</a>
            </div>
        </div>
    </div>
)

export default Header;

