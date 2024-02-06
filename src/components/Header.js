import React from 'react'
import Logo from './images/logo.png'

function Header () {
    return(
        <div className="container">
            <TopBar />
            <MainNavigation />
            
        </div>
        
    )

}
function TopBar() {
    return (
        <div className="row topBar">

            <div className="col-sm-6 topBarLink">
                <a href="">
                    <p>www.DEMOLINK.ORG |</p>
                </a>
            </div>

            <div className="col-sm-6  topBarNav">
                <ul className="list-group list-group-horizontal d-flex justify-content-end">
                    <li>SUPPORT |</li>
                    <li>FAQS |</li>
                    <li>SITEMAP |</li>
                    <li>HELP |</li>
                </ul>
            </div>
        </div>
    )
}

function MainNavigation() {
    return (
        <div className="row mainNavigation align-items-center">
            <div className="col-sm-6 logo">
                <img src={Logo} alt="Detroix Logo" />
            </div>
            <div className="col-sm-6  mainNavigationButtons">
                <ul className="list-group list-group-horizontal d-flex justify-content-center">
                    <li className="list-group-item rounded">HOME </li>
                    <li className="list-group-item rounded">ABOUT </li>
                    <li className="list-group-item rounded">SERVICES </li>
                    <li className="list-group-item rounded">FAQS </li>
                    <li className="list-group-item rounded">CONTACTS</li>
                </ul>
            </div>
        </div>
    )
}
export default Header