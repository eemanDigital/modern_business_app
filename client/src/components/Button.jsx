import { Link } from 'react-router-dom';

const Button = ({ path, icons, text }) => {
  return (
    <>
      <Link to={path} className='general-link'>
        {icons}
        {text}
      </Link>
    </>
  );
};

export default Button;
