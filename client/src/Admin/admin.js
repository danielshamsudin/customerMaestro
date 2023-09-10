// React Bootstrap
import { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faUsers, faTags, faListCheck } from '@fortawesome/free-solid-svg-icons'
// React Component
import Master from "../Master/master.js";
// CSS
import "./admin.css";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

// template imports
import Master from "../Master/master";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <AccordionHeader
      style={{
        backgroundColor: isCurrentEventKey ? "#899878" : "white",
        color: isCurrentEventKey ? "white" : "black",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </AccordionHeader>
  );
}

function Admin() {
    return <>
        <Master />
        <Container fluid>
            <Row className="justify-content-center">
                <h1 className="heading-admin">Welcome, Name!</h1>
            </Row>
        </Container>
        <Container fluid className="content-cont">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <ContextAwareToggle eventKey="0">Reporting <span className="content-icon"><FontAwesomeIcon icon={faChartSimple} /></span></ContextAwareToggle>
                    <Accordion.Body className='acc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <ContextAwareToggle eventKey="1">Customer Management <span className="content-icon"><FontAwesomeIcon icon={faUsers} /></span></ContextAwareToggle>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <ContextAwareToggle eventKey="2">Products <span className="content-icon"><FontAwesomeIcon icon={faTags} /></span></ContextAwareToggle>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <ContextAwareToggle eventKey="3">Tasks <span className="content-icon"><FontAwesomeIcon icon={faListCheck} /></span></ContextAwareToggle>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    </>
  );
}

export default Admin;
