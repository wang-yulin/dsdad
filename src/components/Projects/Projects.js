import React from 'react';
import face from './face.PNG';
import robot from './robots.PNG';
import portfile from './portfile.PNG';

const Projects = () => {
	return (
		<section className="mw7 center avenir">
		  <article className="bt bb b--black-10">
		    <p className="db pv4 ph3 ph0-l no-underline black " >
		      <div className="flex justify-center">
		        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
		          <img src={face} className="db grow" alt=""/>
		          <div className="ph3 flex justify-center">
					  <a className="ma3 f6 link dim ph3 pv2 mb2 dib white bg-purple br3 grow" href="https://yulin-first-app.herokuapp.com/">Live</a>
					  <a className="ma3 f6 link dim ph3 pv2 mb2 dib white bg-purple br3 grow" href="https://github.com/wangyulinaaron/face-front-end">Github</a>
				  </div>
		        </div>
		        <div className="w-100 w-60-ns pl3-ns">
		          <h1 className="f3 fw1 baskerville mt0 lh-title">The Face Detection App</h1>
		          <p className="f6 f5-l lh-copy">
		            Google a picture with face, input the URL and will display a box on the face in the picture.
		            Currently just for one face, I'm trying to figure out how to detect multiple faces.
		          </p>
		          <p className="f6 lh-copy mv0">React.js Node.js Postgres Javascript</p>
		        </div>
		      </div>
		    </p>
		  </article>
		  <article className="bt bb b--black-10">
		    <p className="db pv4 ph3 ph0-l no-underline black " >
		      <div className="flex justify-center">
		        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
		          <img src={robot} className="db grow" alt=""/>
		          <div className="ph3 flex justify-center">
					  <a className="ma3 f6 link dim ph3 pv2 mb2 dib white bg-purple br3 grow" href="https://github.com/wangyulinaaron/Robots">Github</a>
				  </div>
		        </div>
		        <div className="w-100 w-60-ns pl3-ns">
		          <h1 className="f3 fw1 baskerville mt0 lh-title">The Robots Friends</h1>
		          <p className="f6 f5-l lh-copy">
		            Input the name to filter robots and display any robots you want.
		          </p>
		          <p className="f6 lh-copy mv0">React.js Javascript HMTL CSS</p>
		        </div>
		      </div>
		    </p>
		  </article>
		  <article className="bt bb b--black-10">
		    <p className="db pv4 ph3 ph0-l no-underline black " >
		      <div className="flex justify-center">
		        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
		          <img src={portfile} className="db grow" alt=""/>
		          <div className="ph3 flex justify-center">
					  <a className="ma3 f6 link dim ph3 pv2 mb2 dib white bg-purple br3 grow" href="">Live</a>
					  <a className="ma3 f6 link dim ph3 pv2 mb2 dib white bg-purple br3 grow" href="https://github.com/wangyulinaaron/portfolio">Github</a>
				  </div>
		        </div>
		        <div className="w-100 w-60-ns pl3-ns">
		          <h1 className="f3 fw1 baskerville mt0 lh-title">The Portfolio</h1>
		          <p className="f6 f5-l lh-copy">
		            This is what you are seeing
		          </p>
		          <p className="f6 lh-copy mv0">React.js Node.js HTML CSS Javascript</p>
		        </div>
		      </div>
		    </p>
		  </article>

		</section>
	);
}

export default Projects;