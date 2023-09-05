import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
// React Component
import Master from "../Master/master.js";
// CSS
import '../Utilities/colors.css'
import './addproduct.css'

function AddProduct() {
    return <>
    <Master />
        <Container fluid>
            <Row className="justify-content-center title-row">
                <h3 className="main-title">Add Product</h3>
            </Row>
        </Container>
        <Container fluid className="main-content">
            <Form className='main-form'>
                <Row className='justify-content-center'>
                    <button className='picture-btn'>
                        <FontAwesomeIcon icon={faImage} />
                    </button>
                </Row>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Product Code"
                    className="mb-3" >
                    <Form.Control type="text" placeholder="" name="productCode"/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3" >
                    <Form.Control type="text" placeholder="" name="name" required />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Price"
                    className="mb-3">
                    <Form.Control type="text" placeholder="" name="price" required />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Description"
                    className="mb-3" >
                    <Form.Control type="text" placeholder="" name="description" required />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Starting Stock"
                    className="mb-3" >
                    <Form.Control type="text" placeholder="" name="stock" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Type"
                    className="mb-3" >
                    <Form.Control type="text" placeholder="" name="type" />
                </FloatingLabel>
                <Row className='justify-content-center'>
                    <Button variant="primary" type="submit" className='submit-btn'>
                        Save
                    </Button>
                </Row>
            </Form>
        </Container>
    </>
}

export default AddProduct