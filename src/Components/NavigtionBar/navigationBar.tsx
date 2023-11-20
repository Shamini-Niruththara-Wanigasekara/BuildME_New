import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for routing
import "./navigationBar.css"

  
  const NavigationBar: React.FC<{}> = () => {
    const items =  ['Home', 'About', 'Contact'];
    return (
        <nav>
            <div className="nav-bar">
                <i className='bx bx-menu sidebarOpen' ></i>
                <span className="logo navLogo"><a href="#">BuildMe</a></span>
                <div className="menu">
                    <div className="logo-toggle">
                        <span className="logo"><a href="#">BUILDME</a></span>
                        <i className='bx bx-x siderbarClose'></i>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="darkLight-searchBox">
                    <div className="dark-light">
                        <i className='bx bx-moon moon'></i>
                        <i className='bx bx-sun sun'></i>
                    </div>
                    <div className="searchBox">
                        <div className="searchToggle">
                            <i className='bx bx-x cancel'></i>
                            <i className='bx bx-search search'></i>
                        </div>
                        <div className="search-field">
                            <input type="text" placeholder="Search..."/>
                                <i className='bx bx-search'></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
  };
  export default NavigationBar;