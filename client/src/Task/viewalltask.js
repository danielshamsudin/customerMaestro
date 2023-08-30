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
import './viewalltask.css'

function ViewAllTask() {
    return <>
        <Container fluid>
            <Row className="justify-content-center title-row">
                <h3 className="main-title">Tasks</h3>
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
            placeholder="Search Tasks (TODO Popup Search)"
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
                    <th>Customer</th>
                    <th>Deadline</th>
                    <th className="view-field"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>119</td>
                    <td>Muhammad Ali</td>
                    <td>11/09/2024 23:45</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>1235</td>
                    <td>Ahmad Sasa</td>
                    <td>20/09/2024 00:00</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>423</td>
                    <td>Mat</td>
                    <td>21/09/2024 23:45</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>512</td>
                    <td>Muhammad Ali</td>
                    <td>30/09/2024 23:45</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr> 
            </tbody>
        </Table>
    );
}

export default ViewAllTask;