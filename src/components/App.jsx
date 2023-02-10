import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

//=======
import { Container, TitleH1, TitleH2 } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContacts, getError, getLoading } from 'redux/contactsSlice';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { addFilter, getFilter } from 'redux/filterSlice';
import { Loader } from './Loader/Loader';
//=======

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

// export function App() {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Information is updating......</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
//         <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
//         <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
//       </Route>
//     </Routes>
//   );
// }

export const App = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const isLoading = useSelector(getLoading);
  // const error = useSelector(getError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const handleSubmit = newContact => {
  //   const dublicate = contacts.find(({ name }) => name.toLowerCase().includes(newContact.name.toLowerCase()));
  //   if (dublicate) {
  //     alert(`${newContact} is already in contacts`);
  //     return;
  //   }
  //   dispatch(addContact(newContact));
  // };
  // const changeFilter = e => dispatch(addFilter(e.currentTarget.value));
  // const delContact = id => dispatch(deleteContact(id));
  // const randerContacts = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Container>
  );
};
