import classes from './Header.module.css';


type storeState = {
  counter: initS,
  auth: initA
}


const Header = () => {


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>


      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
