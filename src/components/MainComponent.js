import '../App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "../components/MenuComponent";
import {useState} from "react";
import Home from "./HomeComponent";
import {DISHES} from "../shared/Dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Redirect, Route, Switch} from "react-router-dom";


function MainComponent() {
    const [dishes, setDishes] = useState(DISHES)
    // const [selectedDish, setSelectedDish] = useState(null)


    const HomePage = () =>{
        return(
            <Home />
        )
    }
    return (
        <div>
            <Header />
            {/*<Menu dishes={dishes} onClick={(dishID) => onDishSelect(dishID)}/>*/}
            {/*<DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0] }/>*/}
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

export default MainComponent;
