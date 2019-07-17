import React from 'react';
import './Nav.css';

const Nav = () => {
	return (
		<nav className="nav dt w-100 border-box pa3 ph5-ns" >
		  <p className="dtc v-mid mid-gray link dim w-25" title="Home">
		    <img src="http://tachyons.io/img/logo.jpg" className="dib w3 h3 br-100 pointer" alt="Site Name"/>
		  </p>
		  <div className="dtc v-mid w-75 tr">
		    <p className="link dim gold f6 f3-ns dib mr3 mr4-ns pointer"  title="About">About Me</p>
		    <p className="link dim gold f6 f3-ns dib mr3 mr4-ns pointer"  title="Store">My Skills</p>
		    <p className="link dim gold f6 f3-ns dib pointer"  title="Contact">Projects</p>
		  </div>
		</nav>
	);
}

export default Nav;