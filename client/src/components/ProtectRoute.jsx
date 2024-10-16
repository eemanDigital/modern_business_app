import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/protectRoute.scss'; // Import the SCSS file

const ProtectRoute = ({ children }) => {
  const { user } = useAuthContext();
  const role = user?.data?.user?.role;

  if (!user) {
    return (
      <div className='protect-route-container'>
        <h2>Please log in to access this page.</h2>
      </div>
    );
  }

  if (role !== 'admin' && role !== 'author') {
    return (
      <div className='protect-route-container'>
        <h2>This route is restricted to administrators only.</h2>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectRoute;
