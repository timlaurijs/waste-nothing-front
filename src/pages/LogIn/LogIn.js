import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "react-phone-input-2/lib/bootstrap.css";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./LogIn.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <Container className="loginPage">
      <Form as={Col} md={{ span: 4, offset: 4 }} className="loginForm">
        <h2 className="mt-4 mb-4">Login</h2>
        <Form.Group className="loginForm__control">
          <Form.Label lassName="loginForm__label">Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="loginForm__control">
          <Form.Label lassName="loginForm__label">Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mt-4">
          <Button variant="info" type="submit" onClick={submitForm}>
            Log in
          </Button>
        </Form.Group>
        Don't have an account?{" "}
        <Link to="/signup" style={{ textAlign: "center" }}>
          Sign up
        </Link>
      </Form>
    </Container>
  );
}
