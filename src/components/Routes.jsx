import React from 'react';
import {Route, Switch} from "react-router-dom";
import Specialities from "../pages/Specialities/Specialities";
import Directions from "../pages/Directions/Directions";
import NotFound from "../pages/NotFound/NotFound";
import Subjects from "../pages/Subjects/Subjects";
import Users from "../pages/Users/Users";

const Routes = () => {
    return (
        <main className="App">
            <Switch>
                <Route exact path="/">
                    <Specialities/>
                </Route>
                <Route path="/directions/:id">
                    <Directions/>
                </Route>
                <Route path="/applications">
                    aplications
                </Route>
                <Route path="/subjects">
                    <Subjects/>
                </Route>
                <Route path="/users">
                    <Users/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </main>
    );
};

export default Routes;