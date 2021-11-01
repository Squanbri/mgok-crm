import {BrowserRouter} from "react-router-dom";
import {useContext} from "react";
import {observer} from "mobx-react-lite";

import {Context} from "./index";
import Auth from "./pages/Auth/Auth";
import Errors from "./components/Errors";
import SideBar from "./components/SideBar";
import Routes from "./components/Routes";
import './styles/app.css';

const App = observer(() => {

    const {auth} = useContext(Context)

    if (!auth.isAuth) {
        return (
            <main className="App">
                <Errors/>

                <Auth/>
            </main>
        )
    }

    return (
        <main className="App">
            <Errors/>

            <BrowserRouter>
                <SideBar/>
                <Routes/>
            </BrowserRouter>
        </main>
  );
})

export default App;
