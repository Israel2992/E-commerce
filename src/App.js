import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <Header
          title = 'E-commerce'
      />

      <NavBar/>

      <ItemListContainer 
          text = 'Bienvenido ! '
      />

    </div>
  );
}

export default App;
