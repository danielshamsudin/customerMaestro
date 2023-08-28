// CSS
import './master.css'
// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function AutoLayoutExample() {
  return (
    <Container className='main-con'>
      <Row>
        <Col><FontAwesomeIcon icon={faBars} /></Col>
        <Col className='justify-content-end' xs={'auto'} m= {1}>IMG</Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;