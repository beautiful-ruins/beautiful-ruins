import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import App from './app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
require('./style.scss');

const Root = ({store}) => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = {};
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store} />, root);
    // run for feather icons
    window.feather.replace();
    // TEST
    window.getState = store.getState;
});
