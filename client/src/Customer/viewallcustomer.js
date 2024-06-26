import axios from "axios";

import { useNavigate, generatePath } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
// React Component
import Master from "../Master/master.js";
// CSS
import "../Utilities/colors.css";
import "./viewallcustomer.css";

function ViewAllCustomer() {
  return (
    <>
      <Master />
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
  );
}

function SearchBar() {
  return (
    <InputGroup className="search-bar">
      <Form.Control
        placeholder="IC/Name (TODO Popup Search)"
        aria-label="Search Product"
      />
      <Button variant="outline-secondary" id="button-addon2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </InputGroup>
  );
}

function ProductTable() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [custId, setCustId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/customer").then((res) => {
      console.log(res["data"]);
      setData(res["data"]);
      setLoading(false);
    });
  }, []);

  const handleCustomer = (customerInfo) => {
    customerInfo &&
      navigate(`/customer/${customerInfo.ID}`, {
        state: { customerInformation: customerInfo },
      });
  };

  return (
    <>
      <Table bordered hover size="sm" className="product-table">
        <thead>
          <tr>
            <th>IC</th>
            <th>Name</th>
            <th className="view-field"></th>
          </tr>
        </thead>
        {loading && (
          <Container fluid>
            <Row className="justify-content-center">
              <Col>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Col>
            </Row>
          </Container>
        )}
        <tbody>
          {data.map((customer) => (
            <tr key={customer.ID}>
              <td>{customer.IC}</td>
              <td>{customer.Name}</td>
              <td className="view-field">
                {" "}
                <Button
                  key={customer.ID}
                  variant="outline-primary"
                  className="items-btn"
                  onClick={() => handleCustomer(customer)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ViewAllCustomer;
