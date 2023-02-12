import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';

export default function Register() {
    const error = useSelector(selectError);
  return (
    <div>
      <RegisterForm />
      {error && <p>Please try again later. The problem occurred. ${error}</p>}
    </div>
  );
}
