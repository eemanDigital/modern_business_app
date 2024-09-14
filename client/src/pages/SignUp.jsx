import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSignUp } from '../hooks/useSignUp';
import { toast } from 'react-toastify';

import '../styles/login.scss';
import { useDataFetch } from '../hooks/useDataFetch';

function SignUp() {
  const [inputs, setInputs] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });
  const { email, firstName, lastName, password, confirmPassword } = inputs;
  // const { signup, isLoading, error, setError } = useSignUp();
  const { loading, error, dataFetcher } = useDataFetch();

  function handleInputs(e) {
    const input = e.target.value;
    const nameVal = e.target.name;

    setInputs(() => ({ ...inputs, [nameVal]: input }));
  }

  // Validate inputs
  const validateInputs = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
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

    // add user
    await dataFetcher('users/signup', 'post', inputs);
    if (!error) {
      // redirect to login page
      toast.success('User created successfully. Please login');
      // window.location.href = '/';
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='sign-up'>
        <div className='title'>
          <h1>SignUp</h1>
        </div>
        <div className='inputs'>
          <input
            type='text'
            placeholder='firstName'
            value={firstName}
            name='firstName'
            onChange={handleInputs}
          />
          <input
            type='text'
            placeholder='lastName'
            value={lastName}
            name='lastName'
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
          <button disabled={loading}>
            {loading ? ' Submitting...' : ' Submit'}
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
