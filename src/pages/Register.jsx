import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from '../store/user/authSlice'
import Spinner from '../components/UI/spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const { username, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message , {
        position: "top-center",
        autoClose: 3000,
      });
      navigate('/register')
    }

    if (isSuccess && user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      
      toast.error('Passwords do not match', {
        position: "top-center",
        autoClose: 3000,
      });

    } else {
      const userData = {
        username,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={onSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter Username"
                    required
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    required
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    required
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Confrim Password"
                    required
                    name="password2"
                    value={password2}
                    onChange={onChange}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>

              <ToastContainer />

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;