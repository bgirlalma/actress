import { NavLink } from "react-router-dom";
import './headerNav.css'
const HeaderNav = () => {
  return (
    <ul className="header-nav-list">
      <li className="nav-list">
       <NavLink to='/' className='nav-link'>Home</NavLink>
      </li>
      <li className="nav-list">
      <NavLink to='/photo' className='nav-link'>Photo</NavLink>
      </li>
      <li className="nav-list">
      <NavLink to='/video' className='nav-link'>Video</NavLink>
          </li>
    </ul>
  );
};

export default HeaderNav;
