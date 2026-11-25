
import { useAuth } from '../context/AuthContext.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
    navigate(location.state?.from?.pathname || '/dashboard', {
      replace: true
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>Click below to log in with the demo account.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
