import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GoBackButton.scss'; // Import the SCSS file

const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <button className='go-back-button' onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
};

export default GoBackButton;
