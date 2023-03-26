import carrito from './logo/carrito.png'
import './CarWidget.css'

const CarWidget = () => {
    return (
        <div className='CarWidget'>
            <img src={carrito} alt="car-Widget-logo" className='logo'/>
            <p>0</p>
        </div>
    )
}

export default CarWidget