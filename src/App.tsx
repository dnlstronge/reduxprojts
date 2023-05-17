import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from "react-redux"
import { initA, initS } from './Store';

type storeState = {
  counter: initS,
  auth: initA
}

function App() {

  const isAuth = useSelector((state: storeState) => state.auth.isAuthenticated)
  return (
    <>
     <Header />
     {!isAuth && 
     <Auth />}
     <Counter />
    </>
   
  );
}

export default App;
