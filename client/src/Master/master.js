import { React, useState } from 'react';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
// CSS
import './master.css'

function closeAllOverlays() {
  const showElement = document.querySelectorAll("#popover-positioned-right");
  console.log(showElement)
  if (showElement !== null) {
    showElement.forEach(element => {
      element.setAttribute('show', 'false')
    });
  }

}

function Master() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className='main-con'>
        <Row>
          <Col>
            <button type="button" className='master-logo' onClick={handleShow}><FontAwesomeIcon icon={faBars} /></button>
          </Col>
          <Col>
            <Row className='justify-content-end logo'>
              <button type="button" className='master-logo'><a href='/'><FontAwesomeIcon className='logo' icon={faUser} /></a></button>

            </Row>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} className='modal-navbar' animation={false} >
        <Modal.Header id='navbar-modal-header' closeButton>
          <Modal.Title><b>Navigate</b></Modal.Title>
        </Modal.Header>
        <Modal.Body id='navbar-modal-body'>
        <Row>
            <h5 className='option-title'><b>Admin</b></h5>
            <Row className='option-subtitle'><a href='/'><h6>Admin Page</h6></a></Row>
          </Row>
          <Row>
            <h5 className='option-title'><b>Customers</b></h5>
            <Row className='option-subtitle'><a href='addcust'><h6>Add Customers</h6></a></Row>
            <Row className='option-subtitle'><a href='viewallcust'><h6>View All Customers</h6></a></Row>
          </Row>
          <Row>
            <h5 className='option-title'><b>Products</b></h5>
            <Row className='option-subtitle'><a href='addproduct'><h6>Add Products</h6></a></Row>
            <Row className='option-subtitle'><a href='viewallproduct'><h6>View All Products</h6></a></Row>
          </Row>
          <Row>
            <h5 className='option-title'><b>Tasks</b></h5>
            <Row className='option-subtitle'><a href='addtask'><h6>Add Tasks</h6></a></Row>
            <Row className='option-subtitle'><a href='viewalltask'><h6>View All Tasks</h6></a></Row>
          </Row>
          <Row>
            <h5 className='option-title'><b>Sales</b></h5>
            <Row className='option-subtitle'><a href='addsale'><h6>Add Sales</h6></a></Row>
            <Row className='option-subtitle'><a href='viewallsales'><h6>View All Sales</h6></a></Row>
          </Row>
        </Modal.Body>

      </Modal>
    </>
  );
}

function OverlayNavbar(props) {

  // const createItem = props.js
  console.log(props.js)

  return {

  }
}


export default Master;