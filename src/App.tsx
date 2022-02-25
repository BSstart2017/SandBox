import React, {FC, useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css'
import {Context, GlobalContent} from "./index";
import Loader from "./components/Loader";
import {useAuthState} from "react-firebase-hooks/auth";
import Headers from "./components/layout/Headers";

const App: FC = () => {

  const {auth} = useContext<GlobalContent>(Context)
  // @ts-ignore
    const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }

  return (
      <BrowserRouter>
          <Headers>
              <AppRouter/>
          </Headers>
      </BrowserRouter>
  );
};

export default App;