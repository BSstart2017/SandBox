import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {Context} from "../index";
import {LOGIN_ROUTE, SHOP_ROUTE} from "../utils/contacts";
import {privateRoutes, publicRoutes} from "../utils/routes";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
    // @ts-ignore
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    // @ts-ignore
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={SHOP_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    // @ts-ignore
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
};

export default AppRouter;