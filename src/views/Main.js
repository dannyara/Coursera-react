import '../App.css';
import Menu from "../components/MenuComponent";
import {useState} from "react";
import Home from "../components/HomeComponent";
import {DISHES} from "../shared/Dishes";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import {Redirect, Route, Switch} from "react-router-dom";


function Main() {
    const [dishes, setDishes] = useState(DISHES)
    const HomePage = () =>{
        return(
            <Home />
        )
    }
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() =>
                    <Menu dishes={dishes}/>
                }/>
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
