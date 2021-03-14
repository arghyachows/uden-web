import React from 'react'
import udenlogo from '../../../assets/uden-logo.png'
import './Header.scss'
const Header = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <img src={udenlogo} alt="udenlogo" className="uden-logo" />
            </div>
        </div>
    </div>
)

export default Header;

