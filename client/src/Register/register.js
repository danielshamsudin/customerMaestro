// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons'
// CSS
import './register.css'

function Register() {
    return (
        <>
            <h1 className='login-heading'>Register An Account</h1>
            <Form className='main-form'>
                <Row className='justify-content-center'>
                    <button className='picture-btn'>
                        <FontAwesomeIcon icon={faCircleUser} />
                    </button>
                </Row>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Company Code"
                    className="mb-3" >
                    <Form.Control type="text" placeholder="" name="companyCode"/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3" >
                    <Form.Control type="text" placeholder="" name="name" required/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email Address"
                    className="mb-3" >
                    <Form.Control type="email" placeholder="" name="email" required/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                    className="mb-3" >
                    <Form.Control type="tel" placeholder="" name="phoneNumber"/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Position"
                    className="mb-3" >
                    <Form.Control type="text" placeholder="" name="position"/>
                </FloatingLabel>
                <Row className='justify-content-center'>
                    <Button variant="primary" type="submit" className='register-btn'>
                        Register
                    </Button>
                </Row>
            </Form>
        </>
    );
}

export default Register;