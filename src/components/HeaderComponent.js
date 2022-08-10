import React from "react";
import {Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";


function Header(){
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleNav = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            <Navbar dark expand='md'>
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className='mr-auto' href='/'> <img src='assets/images/logo.png' height='30' width='41' alt='Restaurant'/> </NavbarBrand>
                   <Collapse isOpen={isOpen} navbar>
                       <Nav navbar>
                           <NavItem>
                               <NavLink className='nav-link' to="/home">
                                   <span className="fa fa-home fa-lg"/> Home
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className='nav-link' to="/aboutus">
                                   <span className="fa fa-info fa-lg"/> About
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className='nav-link' to="/menu">
                                   <span className="fa fa-list fa-lg"/> Menu
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className='nav-link' to="/contact">
                                   <span className="fa fa-address-card fa-lg"/> Contact
                               </NavLink>
                           </NavItem>
                       </Nav>
                   </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1> Restaurant</h1>
                            <p> This is a restaurant subheader</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </>
    )
}

export default Header