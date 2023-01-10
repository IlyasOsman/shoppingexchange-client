import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routes from '../../routes/Router';

import Carts from '../UI/cart/Carts';

const Layout = () => {
  const [loggedUsername, setLoggedUsername] = useState('');
  const [loggedEmail, setLoggedEmail] = useState('');
  const API = 'http://localhost:3000';

  const storedToken = localStorage.getItem('token');

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
  }, []);
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header loggedUsername={loggedUsername} />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
