import React, { Component } from 'react';
import "./header.scss"
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="logo">
                        <Link to="/">
                        <img src="./logo/download.png"/>

                        </Link>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><Link to="/"><i className='fa fa-sign-out'></i></Link></li>
                            <li><Link to="/">خانه</Link></li>
                            <li><Link to="/">سوالات</Link></li>
                            <li><Link to="/">درباره ما</Link></li>
                        </ul>
                    </nav>
                </header>
            </>
        );
    }
}

export default Header;