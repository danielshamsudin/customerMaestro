import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

import "../Utilities/colors.css";
import "./viewcustomer.css";

import { useParams } from "react-router-dom";

function ViewCustomer() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={3} className="top-row">
            <h4>
              <u>&lt; Back</u>
            </h4>
          </Col>
          <Col className="top-row">
            <h4>
              <u>View All Customers</u>
            </h4>
          </Col>
        </Row>
        <Row className="second-row">
          <Button variant="primary" size="sm">
            <FontAwesomeIcon icon={faPenToSquare} /> Edit
          </Button>
          <Button variant="danger" size="sm">
            <FontAwesomeIcon icon={faXmark} /> Remove
          </Button>
        </Row>
        <Container className="customer-main-content">
          <Row>
            <Col>
              <h5>
                <b>Muhammad ABC</b>
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>IC</Col>
            <Col>991235-14-2344</Col>
          </Row>
          <Row>
            <Col xs={4}>Gender</Col>
            <Col>Male</Col>
          </Row>
          <Row>
            <Col xs={4}>Email</Col>
            <Col>muhammad@gmail.com</Col>
          </Row>
          <Row>
            <Col xs={4}>Tel</Col>
            <Col>012-234 5460</Col>
          </Row>
          <Row>
            <Col xs={4}>Address</Col>
            <Col>No 23, Jalan Persiaran A, 32504 Selangor</Col>
          </Row>
          <Row>
            <Col xs={4}>Shipping Address</Col>
            <Col>muhammad@gmail.com</Col>
          </Row>
          <Row>
            <Col xs={4}>Preference</Col>
            <Col>Goreng Pisang Cheese</Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

function ProductDetails() {
  return (
    <Table hover size="sm" className="product-table">
      <thead>
        <tr></tr>
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
          <td colSpan={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            malesuada mi non purus viverra, sed facilisis nunc sagittis. Donec
            interdum molestie faucibus. Nam pulvinar libero at ante dapibus, at
            posuere nisl ullamcorper. Fusce auctor, lacus in condimentum
            sagittis, nisi nisl volutpat metus, quis venenatis turpis velit sed
            libero. Integer molestie fringilla mollis. Maecenas est nibh,
            accumsan in nibh in, condimentum aliquet quam
          </td>
        </tr>
        <tr>
          <td>Type</td>
          <td>Food</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ViewCustomer;
