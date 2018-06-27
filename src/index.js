import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
//import createHistory from 'history/createBrowserHistory';
import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

firebaseApp.auth().onAuthStateChanged(user => {
	if (user){
		console.log('user signed in ', user);
	} else{
		console.log('user not signed in');
	}
})
ReactDOM.render(
	<Router path="/" history={browserHistory}>
		<Route path="/app" component={App} />
		<Route path="/signin" component={SignIn} />
		<Route path="/signup" component={SignUp} />
	</Router>,
	document.getElementById('root')
	)
