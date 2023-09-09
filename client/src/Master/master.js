// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faHouse } from "@fortawesome/free-solid-svg-icons";
// CSS
import "./master.css";
// react
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Master() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container fluid className="main-con">
      <Row>
        <Col>
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <MDBNavbar>
            <MDBContainer fluid>
              <MDBNavbarToggler
                type="button"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowMenu(!showMenu)}
              >
                <FontAwesomeIcon icon={faBars} />
              </MDBNavbarToggler>
            </MDBContainer>
          </MDBNavbar>

          <MDBCollapse show={showMenu}>
            <div className="bg-light shadow-3 p-4">
              <MDBBtn
                block
                className="border-bottom m-0"
                color="link"
                onClick={() => navigate("/")}
              >
                Home
              </MDBBtn>
              <MDBBtn
                block
                className="border-bottom m-0"
                color="link"
                onClick={() => navigate("/customer")}
              >
                Customer
              </MDBBtn>
            </div>
          </MDBCollapse>
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
  );
}

export default Master;
