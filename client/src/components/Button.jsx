import { Link } from 'react-router-dom';

const Button = ({ path, icons, text, className = 'general-link' }) => {
  return (
    <>
      {/* <Link to={path} className='general-link'> */}
      <Link to={path} className={className}>
        {icons}
        {text}
      </Link>
    </>
  );
};

export default Button;
