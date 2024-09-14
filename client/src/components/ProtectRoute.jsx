import { useAuthContext } from '../hooks/useAuthContext';

const ProtectRoute = ({ children }) => {
  const { user } = useAuthContext();
  const role = user;

  console.log(role, 'ROLE');
  const isAdmin = role === 'admin';

  const checkAdmin = () => {
    if (!isAdmin) {
      return (
        <div>
          <h2>This route is restricted</h2>{' '}
        </div>
      );
    } else {
      return <div>{children}</div>;
    }
  };

  return <div>{checkAdmin()}</div>;
};

export default ProtectRoute;
