import './styles/App.css';
import Auth from "./pages/Auth/Auth";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Speciality from "./pages/Speciality/Speciality";
import SideBar from "./components/SideBar";

function App() {
    return (
        <Router>
            <main className="App">
                <Switch>
                    <Route path="/auth">
                        <Auth/>
                    </Route>
                    <div className="page">
                        <SideBar/>
                        <Route path="/">
                            <Speciality/>
                        </Route>
                    </div>
                </Switch>
            </main>
        </Router>
  );
}

export default App;
