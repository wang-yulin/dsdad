import React from 'react';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import Home from './components/Home';
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
