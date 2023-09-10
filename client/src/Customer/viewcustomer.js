import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
// React Component
import Master from "../Master/master.js";
// CSS
import "../Utilities/colors.css";
import "./viewcustomer.css";
import { useLocation } from "react-router-dom";

function ViewCustomer() {
  const location = useLocation();
  const custInfo = location.state.customerInformation;

  return (
    <>
      <Master />
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
                <b>{custInfo.Name}</b>
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>IC</Col>
            <Col>{custInfo.IC}</Col>
          </Row>
          <Row>
            <Col xs={4}>Gender</Col>
            <Col>{custInfo.Gender}</Col>
          </Row>
          <Row>
            <Col xs={4}>Email</Col>
            <Col>{custInfo.Email}</Col>
          </Row>
          <Row>
            <Col xs={4}>Tel</Col>
            <Col>{custInfo.PhoneNumber}</Col>
          </Row>
          <Row>
            <Col xs={4}>Address</Col>
            <Col>{custInfo.Address}</Col>
          </Row>
          <Row>
            <Col xs={4}>Shipping Address</Col>
            <Col>{custInfo.ShippingAddress}</Col>
          </Row>
          <Row>
            <Col xs={4}>Preference</Col>
            <Col>{custInfo.Preference}</Col>
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
