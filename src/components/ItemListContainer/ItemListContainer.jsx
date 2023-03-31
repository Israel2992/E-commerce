import './ItemListContainer.css'
import Productos from '../Productos/productos';
import { useState } from 'react';

const ItemListContainer = ({setValor}) => {

    const imagen = `https://http2.mlstatic.com/D_NQ_NP_701497-MLA31130240139_062019-W.jpg`

    const [sumartotal,setSumarTotal] = useState (0);

    const suma = () => {
        setSumarTotal(sumartotal +1)
    };


    const [restartotal,setRestarTotal] = useState (0);
    
    const resta = () => {
        setRestarTotal(restartotal +1)
    };

    let total =  sumartotal - restartotal

    setValor(total)


    return (
        <div className='container'>
            <Productos img={imagen} text={`Camisa`}  cantidad={10} handlesumar={suma} handlerestar={resta}/>
            <Productos img={imagen} text={`Camisa`}  cantidad={5}  handlesumar={suma} handlerestar={resta}/>
            <Productos img={imagen} text={`Camisa`}  cantidad={20} handlesumar={suma} handlerestar={resta}/>
        </div>
    )
}

export default ItemListContainer;