import React,{Fragment, useState} from "react";
import './productos.css'


const Productos = ({img,text,cantidad,handlesumar,handlerestar}) => {


    const [count,setCount] = useState(cantidad)


    const agregarCarrito = () => {
        if(count > 0){
            setCount(count -1 );
            handlesumar();
        }
        else{
            alert("No queda stock")
        }
    }

    const eliminarCarrito = () => {
        setCount(count +1);
        handlerestar();
    }


    return (
        <div className="productos">
            <img src={img} alt="" className="imagen"/>
            <p>{text}</p>
            <p> Disponible :{count}</p>
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
            <button onClick={eliminarCarrito}>Eliminar del Carrito</button>
        </div>
    )
}

export default Productos;