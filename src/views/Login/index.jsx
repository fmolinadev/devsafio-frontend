import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Login from '../../components/Login';

const LoginPage = () => {
  const { userData } = useAuth();

  return (
    <div className="bg-gradient-to-b from-mid-light-blue via-mid-blue to-dark-purple min-h-screen flex justify-center items-center">
      {userData ? (
        <Navigate
          to={
            userData.roleId === 1
              ? userData.statusId === 1
                ? '/application'
                : '/user'
              : '/admin'
          }
        />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default LoginPage;
