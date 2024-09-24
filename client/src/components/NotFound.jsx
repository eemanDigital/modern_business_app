import { Link, useNavigate } from 'react-router-dom';
import '../styles/notFound.scss';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='not-found'>
      <h1>Page Not Found</h1>

      <Link onClick={() => navigate(-1)}>
        <h4>Go back</h4>
      </Link>
    </div>
  );
};

export default NotFound;
