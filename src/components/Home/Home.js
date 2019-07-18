import React from 'react';
import fighting from './fighting.jpg';

const Home = () => {
	return (
		<div className=" ">
			<div className="f1 cl"><h1>Yulin <span className="cs">Wang</span></h1></div>
			<div className="f2 cl"><p>Problem Solver</p></div>
			<div><img src={fighting} alt=""/></div>

		</div>
	);
}

export default Home;