import React from 'react';
import fighting from './fighting.jpg';
import './Home.css';

const Home = () => {
	return (
		<div className=" ">
			<div className="f1 cl"><h1>Yulin <span className="">Wang</span></h1></div>
			<div className="f2 cl"><p>Problem Solver</p></div>
			<div><img src={fighting} alt=""className="pic"/></div>

		</div>
	);
}

export default Home;