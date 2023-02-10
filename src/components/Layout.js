import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

export const Layout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <header>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        {isLoggedIn ? (
          <div>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}> Logout </button>
          </div>
        ) : (
          <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </div>
        )}
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
