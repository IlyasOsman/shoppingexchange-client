import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const API = "http://localhost:3000";

  const submitLogin = (e) => {
    e.preventDefault();
    fetch(`${API}/api/v1/login`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: loginUsername,
          password: loginPassword,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("token", data.jwt));

    setLoginUsername("");
    setLoginPassword("");
    use
    
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitLogin}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="username"
                    required
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
