import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Specialities from "../pages/Specialities/Specialities";
import Directions from "../pages/Directions/Directions";
import NotFound from "../pages/NotFound/NotFound";
import Subjects from "../pages/Subjects/Subjects";
import Groups from "../pages/ProfessionalQualitiesGroups/Groups";
import Users from "../pages/Users/Users";
import Professionals from "../pages/ProfessionalQualities/Professionals";
import ProfessionalSubjects from "../pages/ProfessionalSubjects/Subjects";
import Qualities from "../pages/PersonalQualities/Qualities";

const Routes = () => {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/" element={<Specialities />} />
        <Route exact path="/speciality/:id" element={<Directions />} />
        <Route exact path="/speciality/:specId/direction/:dirId" element={<Groups />} />
        <Route exact path="/speciality/:specId/direction/:dirId/group/:groupId" element={<Professionals />} />
        <Route exact path="/speciality/:specId/direction/:dirId/group/:groupId/professional/:profId" element={<ProfessionalSubjects />} />
        <Route path="/applications" element={"aplications"} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/users" element={<Users />} />
        <Route path="/personal-qualities" element={<Qualities/>} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </main>
  );
};

export default Routes;
