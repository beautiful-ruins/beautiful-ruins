import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch } from 'react-router-dom';
import HomePage from './components/homepage';

const App = () => {
    return(
        <>
            <Switch>
                <AuthRoute exact path="/" component={HomePage} />
            </Switch>
        </>
    );
};

export default App;