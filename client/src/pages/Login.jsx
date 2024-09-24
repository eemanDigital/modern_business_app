import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLogin } from '../hooks/useLogin';
import { toast } from 'react-toastify';
import '../styles/login.scss';

function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const { login, isLoading, error, setError } = useLogin();

  function handleInputs(e) {
    const input = e.target.value;
    const nameVal = e.target.name;

    setInputs(() => ({ ...inputs, [nameVal]: input }));
  }

  // Validate inputs
  const validateInputs = () => {
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return false;
    }
    // Add more validation as needed
    return true;
  };

  // handles submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    await login(email, password);
  };

  useEffect(() => {
    if (error) {
      toast.error(error || "Couldn't login");
      setTimeout(() => {
        setError(false);
      }, 2000);
    }

    return clearTimeout;
  }, [error, setError]);

  return (
    <>
      <form onSubmit={handleSubmit} className='login'>
        <div className='title'>
          <h1>Login</h1>
        </div>
        <div className='inputs'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            name='email'
            onChange={handleInputs}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            name='password'
            onChange={handleInputs}
          />

          <button disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Login'}
          </button>
          <div className='no-account'>
            <p>
              <span>No account?</span> <Link to='/signup'>Signup</Link>{' '}
            </p>
            <span>
              Forgot your password?<Link to='/reset-password'>click</Link>
            </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
