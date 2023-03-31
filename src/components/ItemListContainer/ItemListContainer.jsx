import './ItemListContainer.css'
import Productos from '../Productos/productos';
import { useState } from 'react';
import CarWidget from '../CarWidget/CarWidget';

const ItemListContainer = ({setValor}) => {

    const imagen = `https://http2.mlstatic.com/D_NQ_NP_701497-MLA31130240139_062019-W.jpg`

    const [total,setTotal] = useState (0);

    const sumarTotal = () => {
        setTotal(total +1)
    };


    setValor(total)


    return (
        <div className='container'>
            <Productos img={imagen} text={`Camisa`}  cantidad={10} handleTotal={sumarTotal}/>
            <Productos img={imagen} text={`Camisa`}  cantidad={5}  handleTotal={sumarTotal} />
            <Productos img={imagen} text={`Camisa`}  cantidad={20} handleTotal={sumarTotal} />
        </div>
    )
}

export default ItemListContainer;