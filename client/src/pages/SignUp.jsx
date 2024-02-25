import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import http from '../lib/http';
// import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../hooks/useSignUp';
// import { useAuthContext } from '../hooks/useAuthContext';

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
  // // const [error, handleError] = useState('');
  // const navigate = useNavigate();
  // const { user } = useAuthContext();
  // const status = user?.status;
  // console.log(status);
  // const isSuccess = status === 'success';
  // console.log(isSuccess);

  // console.log('STATUS', status);

  function handleInputs(e) {
    const input = e.target.value;
    const nameVal = e.target.name;

    setInputs(() => ({ ...inputs, [nameVal]: input }));
    // setInputs(() => e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password, confirmPassword);

    // if (status === true) {
    //   navigate('/login');
    // } else {
    //   return;
    // }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }

    return clearTimeout;
  }, [error, setError]);

  return (
    <>
      <form onSubmit={handleSubmit} className='sign-up'>
        {error && (
          <div className='error'>
            <span>{error}</span>
          </div>
        )}
        <div className='title'>
          <h1>SignUp</h1>
        </div>
        <div className='inputs'>
          <input
            type='text'
            placeholder='Username'
            // id='username'
            value={username}
            name='username'
            onChange={handleInputs}
          />
          <input
            type='email'
            placeholder='Email'
            // id='email'
            value={email}
            name='email'
            onChange={handleInputs}
          />
          <input
            type='password'
            placeholder='Password'
            // id='password'
            value={password}
            name='password'
            onChange={handleInputs}
          />
          <input
            type='password'
            placeholder='Confirm password'
            // id='confirmPassword'
            value={confirmPassword}
            name='confirmPassword'
            onChange={handleInputs}
          />
          <button disabled={isLoading}>Submit</button>
          <div className='no-account'>
            <p>
              <span>Already have an account?</span>{' '}
              <Link to='/login'>Login</Link>{' '}
            </p>
          </div>
          {/* {error && <h3>{error}</h3>} */}
        </div>
      </form>
    </>
  );
}

export default SignUp;
