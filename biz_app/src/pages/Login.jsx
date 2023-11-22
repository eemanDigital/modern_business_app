import { Link } from 'react-router-dom';
import '../constants/styles/login.scss';
import { useState } from 'react';

function Login() {
  return (
    <form className='login'>
      <div className='title'>
        <h1>Login</h1>
      </div>
      <div className='inputs'>
        <input type='text' placeholder='Username' id='username' />
        <input type='password' placeholder='Password' id='password' />

        <button>Submit</button>
        <div className='no-account'>
          <p>
            <span>No account?</span> <Link to='/register'>Signup</Link>{' '}
          </p>
          <span>
            Forgot your password?<Link>click</Link>
          </span>
        </div>
      </div>
    </form>
  );
}

export default Login;
