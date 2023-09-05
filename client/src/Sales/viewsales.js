import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCheck, faXmark, faFileExport } from '@fortawesome/free-solid-svg-icons'

import '../Utilities/colors.css'
import './viewsales.css'

function ViewSales() {
    return <>
        <Container fluid>
            <Row className="first-row">
                <Col xs={3}>
                    <h4><u>&lt; Back</u></h4>
                </Col>
                <Col className="top-row">
                    <h4><u>View All Sales</u></h4>
                </Col>
            </Row>
            <Row className="second-row">
                <Col xs={8} lg={10}>
                    <Row className="product-title">
                        <h2><b>Sales #AF104</b></h2>
                    </Row>
                </Col>
                <Col xs={4} lg={2} className="btn-choice">
                    <Button variant="primary" size="sm" className="export-btn">
                        Receipt <span className="gap"></span>
                        <FontAwesomeIcon icon={faFileExport} />
                    </Button>
                </Col>
            </Row>
            <Row className="timestamp-row">
                <Col>23/03/2023 14:45</Col>  
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
                <Col xs={4} md={3} lg={2}><h5>Products</h5></Col>
            </Row>
            <Row>
                <Table striped bordered hover className="product-table">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price/Unit (RM)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>Ayam goreng</td>
                            <td>1</td>
                            <td>3.90</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Daging</td>
                            <td>10</td>
                            <td>5.00</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Col xs={4}>Delivery Cost</Col>
                <Col>RM0</Col>
            </Row>
            <Row>
                <Col xs={4}>Total Price</Col>
                <Col><u>RM53.90</u></Col>
            </Row>
        </Container>
    </>
}

export default ViewSales;