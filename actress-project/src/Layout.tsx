import { Outlet } from 'react-router-dom';
import Header from './Components/Header/header'

const Layout = () => {
    return (
      <div>
          <Header />
        <Outlet />
      </div>
    );
}

export default Layout;