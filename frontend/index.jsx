import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import App from './app';
import { Provider } from 'react-redux';

const Root = ({store}) => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = {};
    const store = configureStore(preloadedState);
    debugger;
    ReactDOM.render(<Root store={store} />, root);
});
