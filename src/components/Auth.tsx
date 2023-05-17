import classes from './Auth.module.css';
import React, { FormEvent } from "react";
import { initA } from '../Store';
import { authActions } from '../Store';
import { useSelector, useDispatch } from 'react-redux';



const Auth: React.FC = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: initA) => state.isAuthenticated)

  /* handlers */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("floogity boogity!!!")
    dispatch(authActions.setIsAuthenticated())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
      {isAuth && 
      <div>TESTING CONDITIONALITY</div>}
    </main>
  );
};

export default Auth;
