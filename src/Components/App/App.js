import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
/*import StartPage from "../StartPage/StartPage";*/
import Chats from "../../Pages/Chats/Chats";
import About from "../../Pages/About/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="About" element={<About />} />
                    <Route path="Chats" element={<Chats
                        chatPage={props.state.chatPage}
                        dispatch={props.dispatch}
                    />}>
                        <Route path=":id" element={<Chats
                            chatPage={props.state.chatPage}
                            dispatch={props.dispatch}
                        />} />
                    </Route>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
