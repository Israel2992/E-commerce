
import CarWidget from "../CarWidget/CarWidget";
import './Navbar.css'
import logo from './logo/icono_ecommerce.png'



const NavBar = () => {


    const opcRopaDeportiva = () => {
        console.log(`click`)
    }
    



    
    return (
        <nav className="Navbar">

            <div className="titulo">
                <h3>E-commerce</h3>
                <img src={logo} alt="logo E-commerce" />
            </div>

            <div className="categorias">
                <button className="opcion" onClick={opcRopaDeportiva}> Ropa Deportiva</button>
                <button className="opcion"> Ropa de Caballero   </button>
                <button className="opcion"> Ropa de Dama        </button>
                <button className="opcion"> Contactos           </button>
            </div>
            <CarWidget/>
        </nav>
    )
}

export default NavBar;