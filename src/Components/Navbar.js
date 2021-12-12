import React, { useState } from 'react'
import '../css/Navbar.css'
import Home from './Home';
import TacoMenu from './Tacomenu'
import  HamburguesaMenu from './Hamburguesamenu'
import Contacto from './Contacto'
import Pedido from './Pedido'
import PaquetesMenu from './Paquetes'
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

function Navbar(){
    const [pago,setPago] = useState(0)
    const [cart,setCart] = useState(0) 


    const addcart = (precio) => {
        setCart(cart+1)
        setPago(pago+precio)

    }
    return(
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><h1><span>TACO</span> DELI</h1></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/Tacos">Tacos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Paquetes">Paquetes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Hamburguesas">Hamburguesas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contacto">Contacto</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Pedidos">Status pedido</Link>
                </li>
                    
                </ul>
            </div>
        </nav>
            <Switch>
                <Route path="/Tacos">
                    <TacoMenu
                        onclick = {addcart}
                    />
                </Route>
                <Route path="/Paquetes">
                    <PaquetesMenu
                        onclick = {addcart}
                    />
                </Route>
                <Route path="/Hamburguesas">
                    <HamburguesaMenu
                        onclick = {addcart}
                    />
                </Route>
                <Route path="/Contacto">
                    <section className="contacto">
                        <Contacto />
                    </section>
                </Route>
                <Route path="/Pedidos">
                    <Pedido
                        pago = {pago}
                        setPago = {setPago}
                        cart = {cart}
                        setCart = {setCart}

                    />
                </Route>
                <Route path="/">
                    <Home onclick = {addcart}/>
                </Route> 
            </Switch>
        </Router>
    )
}

export default Navbar;
