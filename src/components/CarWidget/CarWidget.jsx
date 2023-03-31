import carrito from './logo/carrito.png'
import './CarWidget.css'


const CarWidget = ({cantidad_total}) => {
    

    return (
        <div className='CarWidget'>
            <img src={carrito} alt="car-Widget-logo" className='logo'/>
            <p>{cantidad_total}</p>
        </div>
    )
}

export default CarWidget