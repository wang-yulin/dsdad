import React from 'react';
import aaron from './aaron.jpg';
import github from './github.png';
import linkedin from './linkedin.png';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<div className="flex flex-row justify-center ">
			<div className="mw5 pa3 ma5">
				<img src={aaron} className="aaron" alt=""/>
				<div className="">
					<h1>Yulin Wang</h1>
					<hr className="mw3 bb bw1 b--black-10"/>
				</div>
				<footer className="pv2 ph3 flex justify-center">
					<a className="link  dib mh3 tc"
					   href="https://github.com/wangyulinaaron" 
					   target="_blank"
					   rel="noopener noreferrer" 
					   title="Github">
					  <img src={github} alt=""/>
					  <span className="f6 db">GitHub</span>
					</a>					
					<a className="link  dib mh3 tc"
					   href="https://github.com/wangyulinaaron" 
					   target="_blank"
					   rel="noopener noreferrer" 
					   title="LinkedIn">
					   <img src={linkedin} alt=""/>
					   <span className="f6 db">LinkedIn</span>
					</a>					
				</footer>
			</div>
			<div className="mw7 tl pa3 ma3">
				<h1>About me!</h1>
				<p>I have a background in Automobile industry. I loved my time at my previous study, 
				but I felt like I wanted to pursue something else afterwards. Coding always seemed
				 interesting to me and I took a chance on it.
				</p>
				<p>The combination of designing and coding something to life on my screen was 
				fascinating and it's what leads me on my journey to become a kick-ass full-stack developer.
				</p>
				<p>When I'm not coding, I like to play soccer, go rock climbing, lift weights and watch movies.
				</p>
				<hr/>
				<h1>Education</h1>
				<article>
					<div>
					  	<img 
					  	 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2TzGNqgAWATirXEzQCz6IW-RXdpQ98sBZ2C95DfEUr0LUghOmA"
					  	 alt=""
					  	 className='dib'
					  	/>
					  	<div className='dib'>
					  	  <h2 >University of SouthWest</h2>
					  	  <h3 >Vehicle Engineer</h3>				  	  
					  	  <dd className="mt2 f6">2006-2010</dd>				  	  
					    </div>
				    </div>
				    <div>
					    <img 
					  	 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2TzGNqgAWATirXEzQCz6IW-RXdpQ98sBZ2C95DfEUr0LUghOmA"
					  	 alt=""
					  	 className='block'
					  	/>
					  	<div className='dib'>
					  	  <h2 >Self-Taught</h2>
					  	  <h3 >Full Stack Developer</h3>				  	  
					  	  <dd className="mt2 f6">2019</dd>				  	  
					    </div>
				    </div>
				    <hr/>
				    <h1>Get In Touch</h1>
				    <p>Email: yulin_w@yahoo.com</p>
				</article>
			</div>
		</div>
	);
}

export default AboutMe;