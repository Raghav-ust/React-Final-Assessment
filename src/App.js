import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import Login from './Login';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';

import ResponsiveDrawer from './Component/ResponsiveDrawer';
import Products from './Component/Products';
import Posts from './Component/Post';
import Todos from './Component/Todos';
import UsersListing from './Component/Users';

function App() {
  
  const location = useLocation();

  return (
    <div className="App">

      { location.pathname === '/' || 
      location.pathname === '/profilePage' || 
      location.pathname === '/login' ?
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        :
        <>
          <ResponsiveDrawer />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/userListing" element={<UsersListing />} />
            <Route path="/todo" element={<Todos />} />

          </Routes>
        </>
  }
    </div>
  );
}

export default App;
