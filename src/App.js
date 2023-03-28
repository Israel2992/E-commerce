import React, {Fragment} from 'react';
import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Fragment>

       <div className="App">
        
         <Header
            title = 'E-commerce'/>
        
        <NavBar/>
          
        <ItemListContainer 
            text = 'Bienvenido ! '/>
        
       </div>
      
    </Fragment>
  );
}

export default App;
