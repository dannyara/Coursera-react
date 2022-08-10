import '../App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "../components/MenuComponent";
import {useState} from "react";
import {DISHES} from "../shared/Dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";


function MainComponent() {
    const [dishes, setDishes] = useState(DISHES)
    const [selectedDish, setSelectedDish] = useState(null)
    function onDishSelect(dishID) {
        setSelectedDish(dishID)
    }
    return (
        <div>
            <Header />
            <Menu dishes={dishes} onClick={(dishID) => onDishSelect(dishID)}/>
            <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0] }/>
            <Footer />
        </div>
    );
}

export default MainComponent;
