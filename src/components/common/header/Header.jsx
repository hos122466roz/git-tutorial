import React, { Component, useState } from 'react';
import "./header.scss"
import { Link } from 'react-router-dom';

const Header= ()=>{

       const [click , setClick]=useState(false)
        return (
            <>
                <header>
                    <div className="logo">
                        <Link to="/">
                        <img src="./logo/download.png"/>
                        </Link>
                    </div>
                    <nav>
                        <ul className={click ? "mobile-nav" : "nav"}>
                            <li><Link to="/"><i className='fa fa-sign-out'></i></Link></li>
                            <li><Link to="/">خانه</Link></li>
                            <li><Link to="/">سوالات</Link></li>
                            <li><Link to="/">درباره ما</Link></li>
                        </ul>
                        <button className='toggle'   onClick={()=> setClick(!click)}>
                        {click ? <i className='fa fa-times bars'></i> : <i className='fa fa-outdent '></i>}
                        </button>
                    </nav>
                </header>
            </>
        );
 
}

export default Header;