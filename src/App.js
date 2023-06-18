import {
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
  BrowserRouter
} from 'react-router-dom';
import CryptoMarket from './CryptoMarket';
import MainView from './MainView';



function App() {
  return (
<>
    <MainView />
    <CryptoMarket />
</>

  );
}

export default App;
