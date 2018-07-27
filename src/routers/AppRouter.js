import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import PageHome from '../components/PageHome';
import PageAdd from '../components/PageAdd';
import PageEdit from '../components/PageEdit';
import PageHelp from '../components/PageHelp';
import Page404 from '../components/Page404';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={PageHome} exact={true} />
                <Route path="/add" component={PageAdd} />
                <Route path="/edit/:id" component={PageEdit} />
                <Route path="/help" component={PageHelp} />
                <Route component={Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;