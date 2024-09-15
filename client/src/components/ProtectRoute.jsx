import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/protectRoute.scss'; // Import the SCSS file

const ProtectRoute = ({ children }) => {
  const { user } = useAuthContext();
  const role = user?.data?.user?.role;

  console.log(user, 'USER');

  if (!user) {
    return (
      <div className='protect-route-container'>
        <h2>Please log in to access this page.</h2>
      </div>
    );
  }

  if (role !== 'admin') {
    return (
      <div className='protect-route-container'>
        <h2>This route is restricted to administrators only.</h2>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectRoute;
