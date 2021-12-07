import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {RoomsList} from "./pages/rooms-list";
import {UserProfile} from "./pages/user-profile";
import {Registration} from "./pages/registration";
import {LoginPage} from "./pages/login.jsx";
import {ManagerPage} from "./pages/manager-page";

function App() {
  return (
      <Router>
          <ChakraProvider>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route path={"/dashboard"}>
                        <Dashboard/>
                    </Route>
                    <Route path={"/booking"}>
                        <RoomsList/>
                    </Route>
                    <Route path={"/profile"}>
                        <UserProfile/>
                    </Route>
                    <Route path={"/registration"}>
                        <Registration/>
                    </Route>
                    <Route path={"/login"}>
                        <LoginPage/>
                    </Route>
                    <Route path={"/employees"}>
                        <ManagerPage/>
                    </Route>
                    <Route path={"/"}>
                        <Redirect
                            to={{
                                pathname: "/dashboard",
                            }}
                        />
                    </Route>
                </Switch>
            </div>
          </ChakraProvider>
      </Router>
  );
}

export default App;
