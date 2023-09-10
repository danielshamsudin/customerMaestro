import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExport, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// React Component
import Master from "../Master/master.js";
// CSS
import '../Utilities/colors.css'
import './addcustomer.css'

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


function AddCustomer() {
    const location = useLocation();
    // const navigate = useNavigate();
    const [h3Value, seth3Value] = useState("");
    const [custInfo, setcustInfo] = useState({});
    // custInfo.name = ""

    useEffect(() => {
        // const custInfoA = location.state.customerInformation;
        // console.log(custInfoA);
        if (location.state) {
            seth3Value('Edit')
            setcustInfo(location.state.customerInformation)
        }
        else {
            seth3Value('Add')
            setcustInfo({
                'Name': ''
            })
        }
        console.log(custInfo.Name)
    }, [
    ]);


    return <>
        <Master />
        <Container fluid>
            <Row className="justify-content-center title-row">
                <h3 className="main-title">{h3Value} Customer</h3>
            </Row>
            <Row className="table-content">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" name="name" value={custInfo.Name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>IC / ID</Form.Label>
                        <Form.Control type="text" placeholder="" name="id" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select aria-label="Default select example" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" name="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="" name="phoneNumber" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaShippingAddress">
                        <Form.Label>Shipping Address</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.preference">
                        <Form.Label>Preference</Form.Label>
                        <Form.Control type="text" placeholder="" name="preference" />
                    </Form.Group>
                    <Row className="justify-content-center">
                        <Button variant="primary" type="submit" className="submit-btn">
                            Submit
                        </Button>
                    </Row>

                </Form>
            </Row>
        </Container>
    </>
}



export default AddCustomer;