import React, { useState } from 'react';
import { logout } from "../store/user/authSlice";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


function Profile() {

    const loggedEmail = useSelector((state) => state.auth.email);
    const loggedUsername = useSelector((state) => state.auth.username);
  

   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const API = "http://localhost:3000";
  const token = localStorage.getItem("token");
  

  const handleLogout = async () => {
    if (!isLoggedIn) {
      alert("You should log in first.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/api/v1/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.message === "Successfully logged out.") {
        localStorage.removeItem("token");
        dispatch(logout());
        Navigate("/login");
      } else {
        alert("An error occurred while logging out.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while logging out.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Helmet title="Profile">l
      <CommonSection title= {`Hi, ${loggedUsername}`}  />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
                <div>
                {isLoading && <p>Logging out...</p>}
                {!isLoading && (
                    <>
                    <div>
                        <p>Email: {loggedEmail}</p>
                        <p>Username: {loggedUsername}</p>
                    </div>
                        <button className="addTOCart__btn"  onClick={handleLogout}>Log out</button>
                    </> 
                    ) }
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Profile;