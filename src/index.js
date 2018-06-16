import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reg from './components/Login/Reg';
import Login from './components/Login/Login';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom';

const getConfirmation = (message, callback) => {
	const allowTransition = window.confirm(message);
	callback(allowTransition);
}

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
	<HashRouter
		basename='/'
		forceRefresh={supportsHistory}
		getUserConfirmation={getConfirmation}
		keyLength = {6}>
		<div>
			<Route exact path='/' component={Reg}></Route>
			{/*<Route exact path='/' component={Login}></Route>*/}
		</div>
	</HashRouter>, document.getElementById('root'));

registerServiceWorker();
