import React from "react";
// React-Bootstrap
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// React Component
import Master from "../Master/master.js";
// CSS
import "../Utilities/colors.css";
import "./addtask.css";


function AddTask() {
  return (
    <>
      <Master />
      <Container fluid>
        <Row className="justify-content-center title-row">
          <h3 className="main-title">Add Task</h3>
        </Row>
      </Container>
      <Container fluid className="main-content">
        <Form className="main-form">
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInputCustomer"
          >
            <Form.Label>
              <Row>
                <Col>Customer</Col>
                <Col>
                  <Button variant="primary" size="sm" className="normal-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </Col>
              </Row>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Click icon above"
              className="field-customer"
              disabled
              name="customer"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInputRelatedProducts"
          >
            <Form.Label>
              <Row>
                <Col>Products</Col>
                <Col>
                  <Button variant="primary" size="sm" className="normal-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </Col>
              </Row>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Click icon above"
              className="field-customer"
              disabled
              name="relatedproducts"
            />
          </Form.Group>
          <InputGroup className="mb-3">
            <Row>
              <Form.Label className="type-label">Type</Form.Label>
            </Row>
            <Row>
              <Form.Control
                aria-label="Text input with dropdown button"
                name="type"
              />
              <DropdownButton
                variant="outline-secondary"
                title="Choose"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Lead</Dropdown.Item>
                <Dropdown.Item href="#">Followup</Dropdown.Item>
                <Dropdown.Item href="#">Others</Dropdown.Item>
              </DropdownButton>
            </Row>
          </InputGroup>
          <FloatingLabel
            controlId="floatingInput"
            label="Date"
            className="mb-3"
          >
            <Form.Control type="date" placeholder="" name="date" required />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder=""
              name="description"
              required
            />
          </FloatingLabel>

          <Row className="justify-content-center">
            <Button variant="primary" type="submit" className="submit-btn">
              Save
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default AddTask;
