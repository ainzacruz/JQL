import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/JanusQLLogo.png';

const Header = (props) => (
    <header id="header" className="alt">
         <Link target="_blank" to="https://github.com/oslabs-beta/janusql">
        <span className="logo"><img src={logo} alt="" height={300} /></span>
        </Link>
        <h1>JanusQL</h1>
        <p>A Tool for GraphQL API Security and Performance Testing</p>
    </header>
)

export default Header
