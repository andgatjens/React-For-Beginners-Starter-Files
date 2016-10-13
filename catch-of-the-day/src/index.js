// React Core
import React from 'react';

// React DOM
import { render } from 'react-dom';

// React Router
import { BrowserRouter, Match, Miss } from 'react-router';

// Styles
import './css/style.css';

// Components
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

// Routing
const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={ StorePicker } />
				<Match pattern="/store/:storeId" component={ App } />
				<Miss component={ NotFound } />
			</div>
		</BrowserRouter>
	)
}

// Render
render(
	<Root />,
	document.querySelector('#main')
);