import React, {FC, useContext} from 'react';
import {Button} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Context, GlobalContent} from "../index";
import firebase from "firebase/compat/app";


const Login:FC = () => {

    const {auth} = useContext<GlobalContent>(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Login with Google</Button>
                    </Box>
    );
};

export default Login;