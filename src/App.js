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
