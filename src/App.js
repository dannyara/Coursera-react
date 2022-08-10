import './App.css';
import Main from "./views/Main";
import {BrowserRouter} from "react-router-dom";


function App() {
    return(
        <BrowserRouter>
            <Main />
        </BrowserRouter>

    )
}

export default App;
