import React, { useState } from 'react';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import emailjs from '@emailjs/browser'


function Contact() {
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_1vamyaq', 'template_22ib47r', event.target , 'scDtehcPHzP83LLfM').then((result) => {
      console.log(result.text);
      setMessage('Your message has been sent successfully');
      setTimeout(()=>setMessage(''),5000)
      setFormData({name: '', email: '', message: ''});
  }, (error) => {
      console.log(error.text);
  });
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Contact" />
      <section>
        <div className='d-flex justify-content-center'>
          {message && <p className="successs-message" style={{color: "green"}} >{message}</p>}
        </div>
          
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" 
                    onSubmit={handleSubmit}>
                      <div className="form__group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder='Name'
                        />
                    </div>
                     
                    <div className="form__group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder='Email'
                        />
                      </div>
                   
                      
                      <div className="form__group">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                      />
                      </div>
                      <button type="submit" className="addTOCart__btn" >Send</button>
                    </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Contact;
