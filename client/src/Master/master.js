import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faHouse } from "@fortawesome/free-solid-svg-icons";
// CSS
import "./master.css";

function Master() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid className="main-con">
        <Row>
          <Col>
            <button type="button" className="master-logo" onClick={handleShow}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </Col>
          <Col>
            <Row className="justify-content-end logo">
              {window.location.pathname === "/login" ? (
                <FontAwesomeIcon
                  className="logo"
                  icon={faHouse}
                  onClick={() => navigate("/")}
                />
              ) : (
                <FontAwesomeIcon
                  className="logo"
                  icon={faUser}
                  onClick={() => navigate("/login")}
                />
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-navbar"
        animation={false}
      >
        <Modal.Header id="navbar-modal-header" closeButton>
          <Modal.Title>
            <b>Navigate</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="navbar-modal-body">
          <Row>
            <h5 className="option-title">
              <b>Admin</b>
            </h5>
            <Row className="option-subtitle" onClick={() => navigate("/")}>
              <h6>Admin Page</h6>
            </Row>
          </Row>
          <Row>
            <h5 className="option-title">
              <b>Customers</b>
            </h5>
            <Row
              className="option-subtitle"
              onClick={() => navigate("/addcust")}
            >
              <h6>Add Customers</h6>
            </Row>
            <Row
              className="option-subtitle"
              onClick={() => navigate("/customer")}
            >
              <h6>View All Customers</h6>
            </Row>
          </Row>
          <Row>
            <h5 className="option-title">
              <b>Products</b>
            </h5>
            <Row
              className="option-subtitle"
              onClick={() => navigate("/addproduct")}
            >
              <h6>Add Products</h6>
            </Row>
            <Row
              className="option-subtitle"
              onClick={() => navigate("/viewallproduct")}
            >
              <h6>View All Products</h6>
            </Row>
          </Row>
          <Row>
            <h5 className="option-title">
              <b>Tasks</b>
            </h5>
            <Row
              className="option-subtitle"
              onClick={() => navigate("/addtask")}
            >
              <h6>Add Tasks</h6>
            </Row>
            <Row
              className="option-subtitle"
              onClick={() => navigate("/viewalltask")}
            >
              <h6>View All Tasks</h6>
            </Row>
          </Row>
          <Row>
            <h5 className="option-title">
              <b>Sales</b>
            </h5>
            <Row
              className="option-subtitle"
              onClick={() => navigate("/addsale")}
            >
              <h6>Add Sales</h6>
            </Row>
            <Row
              className="option-subtitle"
              onClick={() => navigate("/viewallsales")}
            >
              <h6>View All Sales</h6>
            </Row>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Master;
