import { Link } from 'react-router-dom';
import '../constants/styles/login.scss';
import { useState } from 'react';

function SignUp() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // const [error, handleError] = useState('');

  function handleInputs(e) {
    const input = e.target.value;
    const nameVal = e.target.name;

    setInputs({ ...inputs, [nameVal]: input });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !inputs.username ||
      !inputs.email ||
      !inputs.password ||
      !inputs.confirmPassword
    ) {
      alert('Please fill in all the fields');
      return;
    }

    // Check if passwords match
    if (inputs.password !== inputs.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setInputs({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }
  // console.log(inputs);

  return (
    <form onSubmit={handleSubmit} className='sign-up'>
      <div className='title'>
        <h1>SignUp</h1>
      </div>
      <div className='inputs'>
        <input
          type='text'
          placeholder='Username'
          id='username'
          value={inputs.username}
          name='username'
          onChange={handleInputs}
        />
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
        <input
          type='password'
          placeholder='Confirm password'
          id='confirmPassword'
          value={inputs.confirmPassword}
          name='confirmPassword'
          onChange={handleInputs}
        />
        <button>Submit</button>
        <div className='no-account'>
          <p>
            <span>Already have an account?</span> <Link to='/login'>Login</Link>{' '}
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
