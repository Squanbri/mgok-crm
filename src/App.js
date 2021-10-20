import './styles/App.css';
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

const App = observer(() => {

    const {auth} = useContext(Context)

    useEffect(() => {
        auth.check()
    }, [])

    return (
        <Router>
            <main className="App">
                <Switch>

                    {auth.isAuth ? (
                        <>
                            <SideBar/>
                            <Route exact path="/">
                                <Specialities/>
                            </Route>
                            <Route path="/applications">
                                123
                            </Route>
                        </>
                    ): (
                        <Auth/>
                    )}


                </Switch>
            </main>
        </Router>
  );
})

export default App;
