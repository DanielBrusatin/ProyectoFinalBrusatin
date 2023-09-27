import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import './styles-sheets/App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter className='principal'>
      <NavBar />
      <ItemListContainer greeting={'¡Bienvenidos!'}/>
      <ItemDetailContainer />


    </BrowserRouter>
  );
}
export default App;