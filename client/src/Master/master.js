// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// CSS
import './master.css'

function Master() {
  return (
    <Container className='main-con'>
      <Row>
        <Col><FontAwesomeIcon icon={faBars} /></Col>
        <Col >
          <Row className='justify-content-end logo'>
            IMG
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Master;