import { Link } from 'react-router-dom';
// import http from '../lib/http';
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLogin } from '../hooks/useLogin';

import '../styles/login.scss';

// import { useAuthContext } from '../hooks/useAuthContext';

// import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const { login, isLoading, error, setError } = useLogin();

  // const navigate = useNavigate();

  function handleInputs(e) {
    const input = e.target.value;
    const nameVal = e.target.name;

    setInputs(() => ({ ...inputs, [nameVal]: input }));
  }

  // const handleError = (err) => {
  //   toast.error(err, {
  //     position: 'bottom-left',
  //   });
  // };

  // const handleSuccess = (msg) => {
  //   toast.success(msg, {
  //     position: 'bottom-left',
  //   });
  // };

  // handles submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

    // navigate('/blog');
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
      <form onSubmit={handleSubmit} className='login'>
        {error && (
          <div className='error'>
            <span>{error}</span>
          </div>
        )}
        <div className='title'>
          <h1>Login</h1>
        </div>
        <div className='inputs'>
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

          <button disabled={isLoading}>Submit</button>
          <div className='no-account'>
            <p>
              <span>No account?</span> <Link to='/signup'>Signup</Link>{' '}
            </p>
            <span>
              Forgot your password?<Link>click</Link>
            </span>
          </div>
          {/* {error && <h3>{error}</h3>} */}
        </div>
      </form>
      {/* <ToastContainer /> */}
    </>
  );
}

export default Login;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import http from '../lib/http';

// function Login() {
//   const [inputs, setInputs] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   function handleInputs(e) {
//     const { name, value } = e.target;
//     setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       email: inputs.email,
//       password: inputs.password,
//     };

//     try {
//       const token = localStorage.getItem('token'); // Retrieve token from local storage
//       const { data } = await http.post('/users/login', payload, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Attach token to the Authorization header
//         },
//         withCredentials: true, // Optionally, include this if you are expecting cookies from the server
//       });
//       console.log(data);
//       navigate('/');
//     } catch (error) {
//       console.error('Error updating post:', error);
//     } finally {
//       setInputs({ email: '', password: '' }); // Reset form inputs
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='login'>
//       <input
//         type='email'
//         placeholder='Email'
//         name='email'
//         value={inputs.email}
//         onChange={handleInputs}
//       />
//       <input
//         type='password'
//         placeholder='Password'
//         name='password'
//         value={inputs.password}
//         onChange={handleInputs}
//       />
//       <button type='submit'>Login</button>
//     </form>
//   );
// }

// export default Login;
