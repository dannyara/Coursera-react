import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "./components/MenuComponent";
import {useState} from "react";
import {DISHES} from "./shared/Dishes";

function App() {
  const [dishes, setDishes] = useState(DISHES)
  return (
    <div className="front">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'> The Best Restaurant </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
