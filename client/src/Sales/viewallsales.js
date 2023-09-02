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
import './viewallsales.css'

function ViewAllSales() {
    return <>
        <Container fluid>
            <Row className="justify-content-center title-row">
                <h3 className="main-title">Sales</h3>
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
            placeholder="Search Sales (TODO Popup Search)"
            aria-label="Search Tasks"
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
                    <th>Code</th>
                    <th>Timestamp</th>
                    <th>Total Amount</th>
                    <th className="view-field"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>119</td>
                    <td>11/02/2023 11:45</td>
                    <td>RM1230</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>213</td>
                    <td>01/06/2023 13:00</td>
                    <td>RM43</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>423</td>
                    <td>11/09/2024 23:45</td>
                    <td>RM52</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ViewAllSales;