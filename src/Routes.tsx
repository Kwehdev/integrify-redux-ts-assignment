import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Country from './pages/Country';
import Favourites from './pages/Favourites';
import Home from './pages/Home';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route exact path='/countries/:name' component={Country} />
		<Route exact path='/favourites/' component={Favourites} />
	</Switch>
);

export default Routes;
