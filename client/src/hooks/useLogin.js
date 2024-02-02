import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://localhost:3300/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    // console.log(json);
    // console.log(response.data);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.message);
      console.log(json);
    }
    if (response.ok) {
      // save user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });
      // console.log({ payload: json });
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, setError };
};
