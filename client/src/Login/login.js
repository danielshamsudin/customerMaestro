// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// CSS
import './login.css'

function Login() {
    return (
        <>
        <h1 className='login-heading'>Login</h1>
        <Form className='main-form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="" />
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
          <Row className='justify-content-center'>
            <Button variant="primary" type="submit" className='login-btn'>
                Login
            </Button>
          </Row>
          
        </Form>
        </>
      );
}

function FormField(props) {
    return (
        <>
            <label for={ props.name}>{props.name}</label><br/>
            <input type='text' id={props.name} name={props.name}></input><br/>
        </>
    )
}


export default Login;