import './styles/app.css';
import Auth from "./pages/Auth/Auth";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Specialities from "./pages/Specialities/Specialities";
import SideBar from "./components/SideBar";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Directions from "./pages/Directions/Directions";

const App = observer(() => {

    const {auth} = useContext(Context)

    useEffect(() => {
        auth.check()
    }, [])

    if (!auth.isAuth) {
        return (
            <main className="App">
                <Auth/>
            </main>
        )
    }

    return (
        <Router>
            <main className="App">
                <Switch>
                    <>
                        <SideBar/>
                        <Route exact path="/">
                            <Specialities/>
                        </Route>
                        <Route path="/directions/:id">
                            <Directions/>
                        </Route>
                        <Route path="/applications">
                            123
                        </Route>
                    </>
                </Switch>
            </main>
        </Router>
  );
})

export default App;
