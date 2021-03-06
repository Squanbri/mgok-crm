import {BrowserRouter} from "react-router-dom";
import {useContext} from "react";
import {observer} from "mobx-react-lite";

import {Context} from "./index";
import Auth from "./pages/Auth/Auth";
import Errors from "./components/Errors";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Routes from "./components/Routes";
import './styles/app.css';
import Footer from "./components/Footer";

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
        <>
            <Errors/>

            <BrowserRouter>
                <Header/>
                <SideBar/>
                <Routes/>
                <Footer/>
            </BrowserRouter>
        </>
  );
})

export default App;
