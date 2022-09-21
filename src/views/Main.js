import '../App.css';
import Menu from "../components/Menu";
import {useState} from "react";
import Home from "../components/Home";
import {DISHES} from "../shared/dishes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import Contact from "../components/ContactUs";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import DishDetail from "../components/DishDetail";
import About from "../components/AboutUs";


function Main() {
    //state hooks replace class component state variables
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
    //get parameter that is required for passing in id
    const getDishId = ({match}) => {
        let dish = dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]
        let comments_list = comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))
        return(
            <DishDetail dish={dish} comments={comments_list} />
        );
    };
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={dishes}/>}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/about' component={() => <About leaders={leaders}/> }/>
                <Route path='/menu/:dishId' component={getDishId}/>
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
