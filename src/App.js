import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div className="front">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'> The Best Restaurant </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
