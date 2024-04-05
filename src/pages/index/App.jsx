import './App.css';
import { useRoutes } from 'react-router-dom';
import Routes from '../Routes';
import Header from '../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

function App() {
  let Router = useRoutes(Routes());

  return (
    <>
      <Header />
      {Router}
      <Footer />
    </>
  );
}

export default App;
