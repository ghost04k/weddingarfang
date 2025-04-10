import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu2 from '../MobileMenu2/MobileMenu2'


const Header2 = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }
  const SubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu2 />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand logo" href='/'>Weddind day</Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/home" >Home</Link>
              
                    </li>
                   
                      
                  </ul>

                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                        className={`fi ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                      <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input type="text" className="form-control"
                              placeholder="Search here..." />
                            <button type="submit"><i
                              className="fi ti-search"></i></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <Link className="theme-btn" href="/rsvp"><span className="text">Attend Now</span> <span className="mobile">
                    <i className="fi flaticon-user"></i>
                  </span></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header2;