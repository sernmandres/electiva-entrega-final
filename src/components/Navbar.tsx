import { Container, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useShoppingCart } from '../context/shoppingCartContext';

export function Navbar() {

    const { openCart , cartQuantity} = useShoppingCart();

    return (
        <NavbarBs  sticky='top' className='bg-white shadow-sm h-20'>
            <Container>
                <NavLink id="logoNavBar" className="navbar-brand fw-bold fs-4 p-3" to="/" >SINOC | Data market</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/store">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Nuestro equipo</NavLink>
                        </li> */}
                    </ul>

                    <div className="buttons">
                        <NavLink to="/login" className="bt-loginNavBar">
                            Iniciar sesión
                        </NavLink>
                        <NavLink to="/registrarse" className="btn-registerNavBar ms-2">
                            Registrarse
                        </NavLink>
                        <Button style={{ width: "3rem", height:"3rem", position:"relative",marginLeft:"2em", color:"#6976BF", borderColor:"#6976BF"}} 
                        onClick={openCart}
                        variant="outline-primary"
                        className='rounded-circle btn-HoverCarrito'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                fill="currentColor"
                            >
                                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                            </svg>
                            <div className="rounded-circle d-flex justify-content-center align-items-center cont-HoverCarrito"
                            style={{backgroundColor: "#6976BF", color:"white", width: "1.5rem", height:"1.5rem", position:"absolute", bottom:0, right: 0, transform:"translate(25%,25%)"}}>
                                {cartQuantity}
                            </div>
                        </Button>
                    </div>
                </div>
            </ Container>
        </NavbarBs>
    )

}