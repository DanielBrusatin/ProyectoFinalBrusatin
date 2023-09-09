import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import './styles-sheets/App.css'
const App = () => {
  return (
    <div className='principal'>
      <NavBar />
      <ItemListContainer greeting={'¡Bienvenidos!'}/>

    </div>
  );
}
export default App;