import React, { useEffect, useState } from 'react';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../store/user/authSlice'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { MDBCol, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function Profile(args) {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    
    toast.success("Logged out successfully!", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  //Gets username and emails

  const [loggedUsername, setLoggedUsername] = useState('');
  const [loggedEmail, setLoggedEmail] = useState('');
  const API = 'https://enigmatic-wildwood-08782.herokuapp.com';

  useEffect(() => {
    fetch(`${API}/api/v1/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedUsername(data.user.username);
        setLoggedEmail(data.user.email);
      });
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Helmet title="Profile">
      <CommonSection title= {`Hey ${loggedUsername}, Welcome to your account profile!`}  />
      <section>
       
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="text-center"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: '#fde4e4' }}>
                  <MDBCardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0gw1Qon8aQmHbrqQD4Z1-LKICaMGlp1HXA&usqp=CAU"
                    alt="Avatar" className="my-5" style={{ width: '80px', height: '80px',  backgroundColor: '#fde4e4', overflow: 'hidden' , borderradius: '25px' }} fluid />
                  <h6>{loggedUsername}</h6>
                  <small>Customer</small> 
                  <br />
                  <i class="ri-edit-line"></i>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Account Details</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{loggedEmail}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">Not Available</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Username</MDBTypography>
                        <MDBCardText className="text-muted">{loggedUsername}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">Not Available</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  
                  <div className="d-flex justify-content-between">
                    <Button  color="danger" onClick={toggle} >
                         Delete Account
                  </Button>

                  <button className="addTOCart__btn" onClick={onLogout} >
                         Log out
                  </button>
                  </div>
                  
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
            

              

               <ToastContainer />

          
       
      </section>
    </Helmet>
  );
}

export default Profile;
