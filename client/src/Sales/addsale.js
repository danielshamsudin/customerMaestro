import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExport, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import '../Utilities/colors.css'
import './addsale.css'


function AddSale() {
    return <>
        <Container fluid className="add-sale-container">
            <Row className="justify-content-center title-row">
                <h4>Add Sale</h4>
            </Row>
            <Row>
                <h5>Date/Time</h5>
            </Row>
            <Form className='main-form'>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username with two button addons"
                        type="date"
                        name="timestamp"
                    />
                    <Button variant="outline-secondary">Now</Button>
                </InputGroup>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInputCustomer">
                    <Form.Label>
                        <Row className="form-row">
                            <Col className="form-title"><h5>Customer</h5></Col>
                            <Col><Button variant="primary" size="sm" className="normal-btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button></Col>
                        </Row></Form.Label>
                    <Form.Control type="text" placeholder="Click icon above" className="field-customer" disabled name="customer" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInputCustomer">
                    <Form.Label>
                        <Row className="form-row">
                            <Col className="form-title"><h5>Products</h5></Col>
                            <Col><Button variant="primary" size="sm" className="normal-btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button></Col>
                        </Row></Form.Label>
                    <Form.Control type="text" placeholder="Click icon above" className="field-customer" disabled name="products" />
                </Form.Group>
                <Row className="form-row">
                    <Col className="form-title"><h5>Delivery Cost</h5></Col>
                    <Col className="form-item"> <Form.Group className="" controlId="formDeliveryCost">
                        <Form.Control type="text" placeholder="" name="deliveryCost"/>
                    </Form.Group></Col>
                </Row>
                <Row className="form-row">
                    <Col className="form-title"><h5>Total Price</h5></Col>
                    <Col className="form-item"> <Form.Group className="" controlId="formDeliveryCost">
                        <Form.Control type="text" placeholder="" name="totalPrice" />
                    </Form.Group></Col>
                </Row>
                <Row className='justify-content-center'>
                    <Button variant="primary" type="submit" className='submit-btn'>
                        Save
                    </Button>
                </Row>
            </Form>
        </Container>
    </>
}

export default AddSale;