import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// React Component
import Master from "../Master/master.js";
// CSS
import '../Utilities/colors.css'
import './viewproduct.css'

function ViewProduct() {
  return <>
    <Master />
    <Container fluid>
      <Row>
        <Col xs={3} className="top-row">
          <h4><u>&lt; Back</u></h4>
        </Col>
        <Col className="top-row">
          <h4><u>View All Products</u></h4>
        </Col>
      </Row>
      <Row className="second-row">
        <Button variant="primary" size="sm">
          <FontAwesomeIcon icon={faPenToSquare} /> Edit
        </Button>
      </Row>
      <Container className="product-main-content">
        <Row className="justify-content-center product-title">
          <h2><b>KARIPAP CHEESE</b></h2>
        </Row>
        <Row className="table-content">
          <ProductDetails />
        </Row>
      </Container>
    </Container>
  </>
}

function ProductDetails() {
  return (
    <Table hover size="sm" className="product-table">
      <thead>
        <tr>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Current Stock</td>
          <td>14</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>RM2</td>
        </tr>
        <tr>
          <td>Description</td>
          <td colSpan={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada mi non purus viverra, sed facilisis nunc sagittis. Donec interdum molestie faucibus. Nam pulvinar libero at ante dapibus, at posuere nisl ullamcorper. Fusce auctor, lacus in condimentum sagittis, nisi nisl volutpat metus, quis venenatis turpis velit sed libero. Integer molestie fringilla mollis. Maecenas est nibh, accumsan in nibh in, condimentum aliquet quam</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>Food</td>
        </tr>
      </tbody>
    </Table>
  );
}


export default ViewProduct;