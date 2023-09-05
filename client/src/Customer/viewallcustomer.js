import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExport, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import '../Utilities/colors.css'
import './viewallcustomer.css'

function ViewAllCustomer() {
    return <>
        <Container fluid>
            <Row className="justify-content-center title-row">
                <h3 className="main-title">Customers</h3>
                <Button variant="primary" size="sm" className="export-btn">
                    <FontAwesomeIcon icon={faFileExport} />
                </Button>
            </Row>
            <Row>
                <SearchBar />
            </Row>
            <Row className="table-content">
                <ProductTable />
            </Row>
        </Container>
    </>
}


function SearchBar() {
    return <InputGroup className="search-bar">
        <Form.Control
            placeholder="IC/Name (TODO Popup Search)"
            aria-label="Search Product"
        />
        <Button variant="outline-secondary" id="button-addon2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
    </InputGroup>
}

function ProductTable() {
    return (
        <Table bordered hover size="sm" className="product-table">
            <thead>
                <tr>
                    <th>IC</th>
                    <th>Name</th>
                    <th className="view-field"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>991224-06-3243</td>
                    <td>Mat Sabu</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>234534-08-3243</td>
                    <td>Najib Razak</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>723416-14-6346</td>
                    <td>Melissa Tan</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ViewAllCustomer;