import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, Projects, Work } from './pages';
import './app.css';

class App extends React.Component {
    render() {
      return (
        <main>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/work" component={Work} />
          </Switch>
        </main>
      )
    }
  }

  export default App;