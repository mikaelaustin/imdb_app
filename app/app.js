import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.js';
import axios from 'axios';

render(
	<BrowserRouter>{routes}</BrowserRouter>,
	document.getElementById('app')
);