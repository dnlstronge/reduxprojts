import classes from './Header.module.css';
import { useSelector, useDispatch } from "react-redux"
import { initA, initS } from '../Store';
import { authActions } from '../Store/auth-slice'

type storeState = {
  counter: initS,
  auth: initA
}


const Header = () => {
  const isAuth = useSelector((state: storeState) => state.auth.isAuthenticated)
  const dispatch = useDispatch()


  /* handlers */

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {isAuth && 
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
