import React from 'react';
import './Nav.css';

const Nav = ({onRouteChange}) => {
	return (
		<nav className="nav dt w-100 border-box pa3 ph5-ns" >
		  <p 
		  	className="dtc v-mid mid-gray link dim w-25" 
		  	title="Home"
		  	onClick={() => onRouteChange('home')}
		  >
		    <img src="http://tachyons.io/img/logo.jpg" className="dib w3 h3 br-100 pointer" alt="Site Name"/>
		  </p>
		  <div className="dtc v-mid w-75 tr">
		    <p 
		    	className="link dim gold f6 f3-ns dib mr3 mr4-ns pointer"  
		    	title="About"
		    	onClick={() => onRouteChange('about')}
		    >About Me</p>
		    <p 
		    	className="link dim gold f6 f3-ns dib mr3 mr4-ns pointer"  
		    	title="My Skills"
		    	onClick={() => onRouteChange('my-skill')}
		    >My Skills</p>
		    <p 
		    	className="link dim gold f6 f3-ns dib pointer"  
		    	title="Projects"
		    	onClick={() => onRouteChange('project')}
		    >Projects</p>
		  </div>
		</nav>
	);
}

export default Nav;