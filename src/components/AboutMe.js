import React from 'react';

const AboutMe = () => {
	return (
		<div className="flex flex-row justify-center ">
			<div className="mw5 pa3 ma5">
				<img src="" alt=""/>
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
					  <img src="https://img.icons8.com/metro/52/000000/github.png" alt=""/>
					  <span className="f6 db">GitHub</span>
					</a>					
					<a className="link  dib mh3 tc"
					   href="https://github.com/wangyulinaaron" 
					   target="_blank"
					   rel="noopener noreferrer" 
					   title="LinkedIn">
					   <img src="https://img.icons8.com/metro/52/000000/linkedin.png" alt=""/>
					   <span className="f6 db">LinkedIn</span>
					</a>					
				</footer>
			</div>
			<div className="mw7 tl pa3 ma3">
				<h1>About me!</h1>
				<p>I am a Software Developer located in China with a background in 
				industrial automobile looking to make the change into the tech industry.
				</p>
				<p>A childhood curiosity led to an educational focus in Engineering and Technology.
				While working for Ford, I've gained experience developing lamps for automobile, 
				communicating directly with customers and troubleshooting electrical,
				  mechanical and software issues both in the field and remotely.
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
					  	  <h1 >University of SouthWest</h1>
					  	  <h2 >Vehicle Engineer</h2>				  	  
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
					  	  <h1 >Self-Taught</h1>
					  	  <h2 >Full Stack Developer</h2>				  	  
					  	  <dd className="mt2 f6">2019</dd>				  	  
					    </div>
				    </div>
				    <hr/>
				    <h1>Get In Touch</h1>
				</article>
			</div>
		</div>
	);
}

export default AboutMe;