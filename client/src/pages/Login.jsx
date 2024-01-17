import { Link } from 'react-router-dom';
import '../constants/styles/login.scss';
import { useState } from 'react';

function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  // const [error, handleError] = useState('');

  function handleInputs(e) {
    const input = e.target.value;
    const nameVal = e.target.name;

    setInputs({ ...inputs, [nameVal]: input });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputs.email || !inputs.password) {
      alert('Please fill in all the fields');
      return;
    }

    // Check if passwords match
    if (inputs.password !== inputs.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setInputs({
      email: '',
      password: '',
    });
  }
  console.log(inputs);

  return (
    <form onSubmit={handleSubmit} className='login'>
      <div className='title'>
        <h1>Login</h1>
      </div>
      <div className='inputs'>
        <input
          type='email'
          placeholder='Email'
          id='email'
          value={inputs.email}
          name='email'
          onChange={handleInputs}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          value={inputs.password}
          name='password'
          onChange={handleInputs}
        />

        <button>Submit</button>
        <div className='no-account'>
          <p>
            <span>No account?</span> <Link to='/signup'>Signup</Link>{' '}
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
