const API_URL = 'http://localhost:3000/api/v1/';

const register = async (userData) => {
  const response = await fetch(API_URL + 'users', {
    method: 'POST',
    body: JSON.stringify({
      user: {
        email: userData.email,
        username: userData.username,
        password: userData.password,
      },
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const data = await response.json();

  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('token', data.jwt);
  }

  return data;
};

const login = async (userData) => {
  const response = await fetch(API_URL + 'login', {
    method: 'POST',
    body: JSON.stringify({
      user: {
        email: userData.email,
        username: userData.username,
        password: userData.password,
      },
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  const data = await response.json();

  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('token', data.jwt);
  }

  return data;
};

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;