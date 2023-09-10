// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// Font Awesome
// React Component
import Master from "../Master/master.js";
// CSS
import "./login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [data, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/agent").then((res) => setData(res.data));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    data.forEach((user) => {
      if (user["email"] === email && user["password"] === pwd) {
        setLoggedIn(true);
        console.log("passed");
        alert("logged in");
        navigate("/", { state: { userData: user, session: loggedIn } });
      } else {
        console.log("wrong pass / email");
      }
    });
  };

  return (
    <>
      <Master />
      <h1 className="login-heading">Login</h1>
      <Form className="main-form" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder=""
            onChange={(e) => setPwd(e.target.value)}
          />
        </Form.Group>
        <Row className="justify-content-center">
          <Button variant="primary" type="submit" className="login-btn">
            Login
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default Login;
