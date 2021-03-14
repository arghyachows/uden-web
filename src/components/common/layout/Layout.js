import React from 'react'
import Header from '../header/Header'
// import Footer from '../footer/Footer'
import Content from '../content/Content'
import './Layout.scss'
const Layout = () => (
    <div className="container-fluid p-0">
        <div className="row no-gutters">
            <div className="col-md-12">
                <Header />
            </div>
            <div className="col-md-12">
                <Content />
            </div>
        </div>
    </div>
)

export default Layout;

