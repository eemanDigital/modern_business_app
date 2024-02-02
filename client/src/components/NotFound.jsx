import { Link } from 'react-router-dom';
import '../styles/notFound.scss';
const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>Page Not Found</h1>
      <Link to='..'>
        <h4>Go back</h4>
      </Link>
    </div>
  );
};

export default NotFound;
