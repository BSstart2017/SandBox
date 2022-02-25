import React, {FC, ReactNode, useContext} from 'react';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/contacts";

const Headers: FC<PropsType> = ({children}) => {
    const {auth} = useContext(Context)
    // @ts-ignore
    const [user] = useAuthState(auth)

    return (
        <>
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
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    {children}
                </Grid>
            </Grid>
        </>
    );
}

export default Headers;

type PropsType = {
    children : ReactNode
}