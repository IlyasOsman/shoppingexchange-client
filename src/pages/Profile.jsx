import React from 'react';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../store/user/authSlice'



function Profile() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Helmet title="Profile">
      <CommonSection title= {`Welcome, ${user.username}`}  />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">

              <p>
                Email: {user.email}
              </p>

              <p>
                Username : {user[`username`]}
              </p>

               <button className="addTOCart__btn" onClick={onLogout}>
                Log out
               </button>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Profile;