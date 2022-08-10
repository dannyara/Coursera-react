import '../App.css';
import Menu from "../components/MenuComponent";
import {useState} from "react";
import Home from "../components/HomeComponent";
import {DISHES} from "../shared/dishes";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import {Redirect, Route, Switch} from "react-router-dom";
import Contact from "../components/ContactComponent";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";


function Main() {
    const [dishes, setDishes] = useState(DISHES)
    const [comments, setComments] = useState(COMMENTS)
    const [promos, setPromos] = useState(PROMOTIONS)
    const [leaders, setLeaders] = useState(LEADERS)
    const HomePage = () =>{
        return(
            //get featured dish by filtering
            <Home
                dish={dishes.filter((dish) => dish.featured)[0]}
                promo={promos.filter((promo) => promo.featured)[0]}
                leader={leaders.filter((leader) => leader.featured)[0]}
            />
        )
    }
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={dishes}/>}/>
                <Route exact path='/contact' component={Contact}/>
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
