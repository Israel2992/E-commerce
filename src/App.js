import React, {Fragment, useState} from 'react';
import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const [valor,setValor] = useState (0);

  return (
    <Fragment>

       <div className="App">
        
         <Header title = 'E-commerce'/>
        
        <NavBar totalCarrito={valor}/>
          
        <ItemListContainer setValor = {setValor}/>
        
       </div>
      
    </Fragment>
  );
}

export default App;
