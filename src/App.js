import { useEffect } from 'react';
import {  useDispatch } from "react-redux";
import { loginSuccess } from "./store/user/authSlice";
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout/Layout';

function App() {
  const dispatch = useDispatch();
  const API = "http://localhost:3000";
  const storedToken = localStorage.getItem("token");
  console.log(storedToken)

  useEffect(() => {
    fetch(`${API}/api/v1/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(loginSuccess({
          token: data.jwt,
          email: data.user.email,
          username: data.user.username
      }));
      });
  });

  return (
    <>
      {storedToken ? (
        <Layout />
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;