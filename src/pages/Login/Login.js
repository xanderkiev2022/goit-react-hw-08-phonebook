import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';

export default function Login() {
  const error = useSelector(selectError);
  return (
    <div>
      <LoginForm />
      {error && <p>Please try again later. The problem occurred. ${error}</p>}
    </div>
  );
}
