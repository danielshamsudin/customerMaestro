import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

import '../Utilities/colors.css'
import './viewtask.css'

function ViewTask() {
    return <>
        <Container fluid>
            <Row className="first-row">
                <Col xs={3}>
                    <h4><u>&lt; Back</u></h4>
                </Col>
                <Col className="top-row">
                    <h4><u>View All Task</u></h4>
                </Col>
            </Row>
            <Row className="second-row">
                <Col xs={8} lg={10}>
                    <Row className="product-title">
                        <h2><b>Task #119</b></h2>
                    </Row>
                </Col>
                <Col xs={4} lg={2} className="btn-choice">
                    <Row><Button variant="primary" size="sm" className="normal-btn">
                        <FontAwesomeIcon icon={faPenToSquare} /> Edit
                    </Button></Row>
                    <Row><Button variant="success" size="sm" className="done-btn">
                        <FontAwesomeIcon icon={faCheck} /> Done
                    </Button></Row>
                    <Row><Button variant="danger" size="sm">
                        <FontAwesomeIcon icon={faXmark} /> Remove
                    </Button></Row>
                </Col>
            </Row>
            <Row>
                <CustomerDetails />
            </Row>
            <Row>
                <Details />
            </Row>
        </Container>
    </>
}

function CustomerDetails() {
    return <>
        <Container fluid className="customer-container">
            <Row>
                <Col xs={4} md={3} lg={2}><h4><u>Customer</u></h4></Col>
                <Col><Button variant="primary" size="sm" className="normal-btn">
                    View
                </Button></Col>
            </Row>
            <Row className="customer-details">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    <Form.Control
                        placeholder="Muhammad Dan"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="name"
                        disabled
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
                    <Form.Control
                        placeholder="muhammad@gmail.com"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="email"
                        disabled
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">Phone</InputGroup.Text>
                    <Form.Control
                        placeholder="01646713858"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="email"
                        disabled
                    />
                </InputGroup>
            </Row>
        </Container>

    </>
}

function Details() {
    return <>
        <Container fluid className="details-container">
            <Row className="first-row-details">
                <Col xs={4} md={3} lg={2}><h4><u>Details</u></h4></Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                        <Form.Control
                            placeholder="Lead"
                            aria-label="Lead"
                            aria-describedby="basic-addon1"
                            name="category"
                            disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">Date</InputGroup.Text>
                        <Form.Control
                            placeholder="10.09.2023"
                            aria-label="Date to finish"
                            aria-describedby="basic-addon2"
                            name="date"
                            disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">Time</InputGroup.Text>
                        <Form.Control
                            placeholder="00:00"
                            aria-label="time to finish"
                            aria-describedby="basic-addon2"
                            name="time"
                            disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3 ">
                        <InputGroup.Text id="basic-addon2">Description</InputGroup.Text>
                         <Form.Control as="textarea" placeholder="Followup on product interest: Keropok Lekor"
                          aria-label="description"
                          aria-describedby="basic-addon2"
                          name="description"
                          disabled
                         />
                    </InputGroup>
                    <InputGroup className="mb-3 ">
                        <InputGroup.Text id="basic-addon2">Related Products</InputGroup.Text>
                         <Form.Control as="textarea" placeholder="Keropok Lekor"
                          aria-label="related-products"
                          aria-describedby="basic-addon2"
                          name="relproducts"
                          disabled
                         />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    </>
}

export default ViewTask;