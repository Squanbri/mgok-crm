import React from 'react';
import {Route, Switch} from "react-router-dom";
import Specialities from "../pages/Specialities/Specialities";
import Directions from "../pages/Directions/Directions";
import NotFound from "../pages/NotFound/NotFound";
import Subjects from "../pages/Subjects/Subjects";
import Groups from "../pages/ProfessionalQualitiesGroups/Groups";
import Users from "../pages/Users/Users";
import Professionals from '../pages/PersonalQualities/Professionals';

const Routes = () => {
    return (
        <main className="App">
            <Switch>
                <Route exact path="/">
                    <Specialities/>
                </Route>
                <Route exact path="/speciality/:id">
                    <Directions/>
                </Route>
                <Route exact path="/speciality/:specId/direction/:dirId">
                    <Groups/>
                </Route>
                <Route path="/speciality/:specId/direction/:dirId/group/:groupId">
                    <Professionals/>
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