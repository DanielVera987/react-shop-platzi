import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import CreateAccount from '../pages/CreateAccount';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/recovery-password" component={PasswordRecovery} />
                        <Route exact path="/send-email" component={SendEmail} />
                        <Route exact path="/new-password" component={NewPassword} />
                        <Route exact path="/account" component={MyAccount} />
                        <Route exact path="/signup" component={CreateAccount} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/orders" component={Orders} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Layout>
            </Router>
        </AppContext.Provider>
    );
}

export default App
