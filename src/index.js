import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
const reducer = (state, action) => {
	return {
		text: '',
		done: false,
		id: Date.now(),
	};
};

const store = createStore(reducer);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
