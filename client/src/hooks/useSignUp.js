import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password, confirmPassword) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://localhost:3300/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password, confirmPassword }),
    });
    const json = await response.json();

    console.log(json);
    // console.log(response.data);

    if (!response.ok) {
      setIsLoading(false);

      if (json.message.includes('User validation')) {
        // console.log(typeof json.message);
        setError(json.message.split(':')[2]);
      } else {
        setError(json.message);
        // console.log(json.message);
      }
    }

    if (response.ok) {
      // save user to local storage
      // localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });
      // console.log({ payload: json });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error, setError };
};
