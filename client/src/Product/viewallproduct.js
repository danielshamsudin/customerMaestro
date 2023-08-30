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
import './viewallproduct.css'

function ViewAllProduct() {
    return <>
        <Container fluid>
            <Row className="justify-content-center title-row">
                <h3 className="main-title">Products</h3>
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
            placeholder="Search Product (TODO Popup Search)"
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
                    <th>Code</th>
                    <th>Name</th>
                    <th className="view-field"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>R001</td>
                    <td>Karipap Cheese</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>R0212</td>
                    <td>Goreng Pisang kosong</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>R0213</td>
                    <td>Goreng Pisang bersama kuah kicap</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>
                <tr>
                    <td>W123</td>
                    <td>Cendol bakar</td>
                    <td className="view-field"> <Button variant="outline-primary" className="items-btn">View</Button></td>
                </tr>   
            </tbody>
        </Table>
    );
}

export default ViewAllProduct;