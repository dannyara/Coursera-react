import '../App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "../components/MenuComponent";
import {useState} from "react";
import {DISHES} from "../shared/Dishes";
import DishDetail from "./DishdetailComponent";


function MainComponent() {
    const [dishes, setDishes] = useState(DISHES)
    const [selectedDish, setSelectedDish] = useState(null)
    function onDishSelect(dishID) {
        setSelectedDish(dishID)
    }
    return (
        <div className="front">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href='/'> The Best Restaurant </NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={dishes} onClick={(dishID) => onDishSelect(dishID)}/>
            <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0] }/>
        </div>
    );
}

export default MainComponent;
