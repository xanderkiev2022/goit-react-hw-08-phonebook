import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Header, Wrapper, Username, NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Header>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
        {isLoggedIn ? (
          <Wrapper>
            <Username>Welcome, {user.name}</Username>
            <button type="button" onClick={() => dispatch(logOut())}> Logout </button>
          </Wrapper>
        ) : (
          <div>
            <NavLinkStyled to="/register">Register</NavLinkStyled>
            <NavLinkStyled to="/login">Log In</NavLinkStyled>
          </div>
        )}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
