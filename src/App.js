import React from 'react';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import './App.css';



class App extends React.Component {
  render(){
    return(
      <div className='App'>
        <Nav />
        <AboutMe />
        <MySkills />
        <Projects />
      </div>
    );
  }
}

export default App;
