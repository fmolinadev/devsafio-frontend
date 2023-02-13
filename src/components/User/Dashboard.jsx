import { NavLink } from 'react-router-dom';
import { DashboardUser, DashboardAdmin } from './DashboardData';
import { useAuth } from '../../context/authContext';

export default function Dashboard() {
  const { userData } = useAuth();

  const dashboard = items => {
    return items.map((item, index) => (
      <NavLink to={item.path} key={index}>
        {({ isActive }) => (
          <button
            key={index}
            className={`h-16 flex md:w-48 p-5  text-start cursor-pointer focus:bg-light-purple hover:bg-light-purple hover:text-white focus:text-white rounded-md ${
              isActive ? 'bg-light-purple text-white' : ''
            }`}
          >
            <div className="hidden md:flex gap-3 ">
              {item.icon} {item.title}
            </div>
            <div className="md:hidden">{item.icon}</div>
          </button>
        )}
      </NavLink>
    ));
  };

  return (
    <div className=" flex text-light-purple md:w-54 lg:w-70 justify-center h-96 ">
      <div className=" w-16 md:w-32 mt-12 absolute">
        <div className="flex gap-x-2 p-1 justify-center items-center text-xl h-14 w-22 border-2 border-light-purple rounded-2xl bg-white font-bold mb-1">
          <h1 className="hidden md:block md:text-lg lg:text-xl">{userData && userData.roleId === 1 ? 'JOB READY' : 'ADMIN'}</h1>
          <h1 className="sm:text-center sm:text-lg md:hidden lg:hidden">{userData && userData.roleId === 1 ?'JR' : 'ADM'}</h1>
        </div>
      </div>
      <div className=" w-19 md:w-48 mt-40 mb-0 mr-1">
        {userData ? (
          <ul>
            {userData.roleId === 1
              ? dashboard(DashboardUser)
              : userData.roleId === 2
              ? dashboard(DashboardAdmin)
              : null}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
