import React, {FC, useContext} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {Context} from "../index";
import {LOGIN_ROUTE} from "../utils/contacts";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar: FC = () => {
    const {auth} = useContext(Context)
    // @ts-ignore
    const [user] = useAuthState(auth)

    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"flex-end"}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>Log uot</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;