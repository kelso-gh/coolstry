import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, {user.name}. What's the story?</span>
      &nbsp;&nbsp;
      <Link to="/profile">My Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/photos">Photo Feed</Link>
      &nbsp; | &nbsp;
      <Link to="/photos/all">Discover</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}