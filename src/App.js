import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<div className='App'>
				<Router basename={process.env.PUBLIC_URL}>
					<Fragment>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route
								exact
								path='/projects'
								component={Projects}
							/>
							<Route exact path='/contact' component={Contact} />
							<Route exact path='/resume' component={Resume} />
							<Route exact path='/about' component={About} />
						</Switch>
					</Fragment>
				</Router>
			</div>
		</Provider>
	);
};

export default App;
