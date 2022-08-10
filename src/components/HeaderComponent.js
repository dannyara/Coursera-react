import React from "react";
import {Jumbotron, Navbar, NavbarBrand} from "reactstrap";


function Header(){
    return(
        <>
            <Navbar dark>
                <div className="container">
                    <NavbarBrand href='/'> The Best Restaurant </NavbarBrand>
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