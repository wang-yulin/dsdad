import React from 'react';
import rockets from './rockets.png';
import './MySkills.css';

const MySkills = () => {
	return (
		<div>
			<article className="self mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 center tc w-70 ">
				<h2>Top 5 Skills</h2>
				<hr className="mw3 bb bw1 b--black-10"/>
				<div className="pa1 w-100 a" >
					<p className="dib f4  black hover-blue grow pv1 ph2">JavaScript</p>
					<p className="dib f4  black hover-blue grow pv1 ph2">React.js</p> 
					<p className="dib f4  black hover-blue grow pv1 ph2">Node.js</p>
					<p className="dib f4  black hover-blue grow pv1 ph2">CSS3</p>
					<p className="dib f4  black hover-blue grow pv1 ph2">HTML5</p>
				</div>
			</article>
			<div className="flex justify-center">
				<div className='a grow'>
					<div className="mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
						<h2><img className="img" src={rockets} alt="" />Front-end</h2>
						<hr className="mw3 bb bw1 b--black-10"/>				
						<p className="f4  black hover-blue pv1 ph2">HTML5</p>
						<p className="f4  black hover-blue pv1 ph2">CSS3</p> 
						<p className="f4  black hover-blue pv1 ph2">Bootstrap</p>
						<p className="f4  black hover-blue pv1 ph2">React.js</p>
						<p className="f4  black hover-blue pv1 ph2">JavaScript</p>
					</div>
				</div>
				<div className='a grow'>
					<div className="mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
						<h2><img className="img" src={rockets} alt="" />Back-end</h2>
						<hr className="mw3 bb bw1 b--black-10"/>				
						<p className="f4  black hover-blue pv1 ph2">Node.js</p>
						<p className="f4  black hover-blue pv1 ph2">Python</p> 
						<p className="f4  black hover-blue pv1 ph2">Postgres</p>
					</div>
				</div>
				<div className='a grow'>
					<div className="mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
						<h2><img className="img" src={rockets} alt="" />Others</h2>
						<hr className="mw3 bb bw1 b--black-10"/>				
						<p className="f4  black hover-blue pv1 ph2">Git</p>
						<p className="f4  black hover-blue pv1 ph2">Responsive Design</p> 
						<p className="f4  black hover-blue pv1 ph2">RESTful APIs</p>
					</div>
				</div>
			</div>
		</div>


		
	);
}

export default MySkills;