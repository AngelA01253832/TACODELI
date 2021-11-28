import React, { useState } from 'react'
import '../css/Navbar.css'
import Home from './Home';
import Pizza_menu from './Pizza_menu'
import  Adicionales from './Adicionales_menu'
import Contacto from './Contacto'
import Pedido from './Pedido'
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><h1><span>PIZZA</span> DELI</h1></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to="/Pizzas">Pizzas</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Adicionales">Adicionales</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Contacto">Contacto</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Pedidos">Status pedido</Link>
                </li>
                    
                </ul>
            </div>
        </nav>
            <Switch>
                <Route path="/Pizzas">
                    <Pizza_menu
                        onclick = {addcart}
                    />
                </Route>
                <Route path="/Adicionales">
                    <Adicionales
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
