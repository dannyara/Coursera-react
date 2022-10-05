import React, {useState} from "react";
import {
    Collapse,
    Jumbotron,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Modal,
    NavItem,
    ModalHeader,
    ModalBody, Button, ModalFooter
} from "reactstrap";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function Header({args}){
    const [isOpen, setIsOpen] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)
    const toggleNav = () => {
        setIsOpen(!isOpen)
    }
    const toggleModal = () => setShowModal(!showModal);
    console.log(showModal)
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return(
        <>
            <Modal isOpen={showModal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}> Login</ModalHeader>
                <ModalBody> fd
                </ModalBody>
            </Modal>
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
                               <NavLink className='nav-link' to="/about">
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
                       <Nav className='ml-auto' navbar>
                           <NavItem>
                               <Button outline onClick={toggleModal}>
                                   <span className='fa fa-sign-in fa-lg'>Login</span>
                               </Button>
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