import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <Route exact path='/' component={Home} />
          <section className='container'>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
