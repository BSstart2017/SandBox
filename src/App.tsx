import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css'
import {Context} from "./index";
import Loader from "./components/Loader";
import {useAuthState} from "react-firebase-hooks/auth";

const App = () => {
  // @ts-ignore
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }

  return (
      <BrowserRouter>
          <Navbar/>
          <AppRouter/>
      </BrowserRouter>
  );
};

export default App;