import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSignUp } from '../hooks/useSignUp';
import { toast } from 'react-toastify';

import '../styles/login.scss';

function SignUp() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { username, email, password, confirmPassword } = inputs;
  const { signup, isLoading, error, setError } = useSignUp();

  function handleInputs(e) {
    const input = e.target.value;
    const nameVal = e.target.name;

    setInputs(() => ({ ...inputs, [nameVal]: input }));
  }

  // Validate inputs
  const validateInputs = () => {
    if (!username || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return false;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    }
    // Add more validation as needed
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    await signup(username, email, password, confirmPassword);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }

    return clearTimeout;
  }, [error, setError]);

  return (
    <>
      <form onSubmit={handleSubmit} className='sign-up'>
        <div className='title'>
          <h1>SignUp</h1>
        </div>
        <div className='inputs'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            name='username'
            onChange={handleInputs}
          />
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
          <input
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            name='confirmPassword'
            onChange={handleInputs}
          />
          <button disabled={isLoading}>
            {isLoading ? ' Submitting...' : ' Submit'}
          </button>
          <div className='no-account'>
            <p>
              <span>Already have an account?</span>{' '}
              <Link to='/login'>Login</Link>{' '}
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
