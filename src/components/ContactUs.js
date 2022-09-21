import React, {useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Card, Col} from "reactstrap";
import {Link} from "react-router-dom";

function Contact(props) {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        phone :'',
        agree: '',
        contactType: ''
    })
    const onInputChange = (field, formData) => {
        console.log(formData, field)
        const target = formData.target
        const val = target.type === 'checkbox' ? target.checked : target.value
        setFormData({
            [field]: val
        })
    }
    const onSubmit = () => {
        console.log('current state is ', JSON.stringify(formData))
    }
    return(
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3> Contact Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className={"row row-content"}>
                <div className='col-12'>
                    <h3> Send us your feedback</h3>
                </div>
                <div className='col-12 col-md-9'>
                    <Form onSubmit={() => {onSubmit()}}>
                        <FormGroup row>
                            {/*md=2 means it'll take up 2 rows*/}
                            <Label htmlFor='firstname' md={2}> First Name</Label>
                            <Col md={10}>
                                <Input type='text'
                                       id='firstname' name='firstname'
                                       placeholder='First Name'
                                       value={formData.firstname}
                                       onChange={(data) => {
                                           onInputChange('firstname', data)
                                       }}
                                />

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            {/*md=2 means it'll take up 2 rows*/}
                            <Label htmlFor='firstname' md={2}> Last Name</Label>
                            <Col md={10}>
                                <Input type='text'
                                       id='lastname' name='lastname'
                                       placeholder='Last Name' value={formData.lastname}
                                       onChange={(text) => onInputChange('lastname', text)}/>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            {/*md=2 means it'll take up 2 rows*/}
                            <Label htmlFor='phone' md={2}> Contact num</Label>
                            <Col md={10}>
                                <Input type='text'
                                       id='phone' name='phone'
                                       placeholder='Phone Number' value={formData.phone}
                                       onChange={(text) => onInputChange('phone', text)}/>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            {/*md=2 means it'll take up 2 rows*/}
                            <Label htmlFor='email' md={2}> Email Address</Label>
                            <Col md={10}>
                                <Input type='text'
                                       id='email' name='email'
                                       placeholder='Email' value={formData.email}
                                       onChange={(text) => onInputChange('email', text)}/>

                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{size: 6, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' name='agree'
                                               checked={formData.agree}
                                               onChange={(text) => onInputChange('agree', text)}
                                        /> {' '}
                                        <strong> May we contact you? </strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Input type='select' name='contactType' value={'contactType'}>
                                    <option> Phone</option>
                                    <option> Email</option>

                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            {/*md=2 means it'll take up 2 rows*/}
                            <Label htmlFor='message' md={2}> Your Feedback</Label>
                            <Col md={10}>
                                <Input type='textarea'
                                       id='message'
                                       name='message'
                                       rows='12'
                                       value={formData.message}
                                       onChange={(text) => onInputChange('message', text)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button
                                       type='submit'
                                       color='primary'>
                                    Send Feedback
                                </Button>

                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;