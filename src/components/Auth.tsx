import classes from './Auth.module.css';
import React, { FormEvent } from "react";
import { initA, initS } from '../Store';
import { authActions } from '../Store/auth-slice';
import { useSelector, useDispatch } from 'react-redux';

type storeState = {
  counter: initS,
  auth: initA
}

const Auth: React.FC = () => {
  const dispatch = useDispatch()
  

  /* handlers */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(authActions.login())
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

    </main>
  );
};

export default Auth;
