import React from 'react';
import Nav from './components/Nav/Nav';
import AboutMe from './components/AboutMe/AboutMe';
import MySkills from './components/MySkills/MySkills';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import './App.css';



class App extends React.Component {
  constructor(){
      super();
      this.state = {
        route: 'home'
      }
    }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render(){    
    return(
      <div className='App'>
        <Nav onRouteChange={ this.onRouteChange } />
        {
          (this.state.route === "home" && <Home />)
          || (this.state.route === "about" && <AboutMe />)
          || (this.state.route === "my-skill" && <MySkills />)
          || (this.state.route === "project" && <Projects />)                      
          }       
      </div>
    );
  }
}

export default App;
