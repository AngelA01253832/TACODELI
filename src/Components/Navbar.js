import React, { useState } from 'react'
import '../css/Navbar.css'
import Home from './Home';
import TacoMenu from './Tacomenu'
import  HamburguesaMenu from './Hamburguesamenu'
import Contacto from './Contacto'
import Pedido from './Pedido'
import PaquetesMenu from './Paquetes'
import { Navbar, Container, Nav } from "react-bootstrap"
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

export default function Navbarmenu(){
    const [pago,setPago] = useState(0)
    const [cart,setCart] = useState(0) 
    const [nombre,setNombres] = useState([]) 
    const [data,setData] = useState([])

    const addcart = (precio,name) => {
        let pricenumber = parseInt(precio)
        setCart(cart+1)
        setPago(pago+pricenumber)
        setNombres(nombres => [...nombres, name])

    }
    const addData = (values) => setData(values)

    
    return(
        <Router>
        <Navbar className="Container" bg="light" expand="lg">
            <Container className='Container'>
                <Navbar.Brand>
                    <Link id='logo' to="/"><h1><span>TACO</span> DELI</h1></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='navbar-items' className="me-auto">
                        <Nav.Link>
                            <Link className="item" to="/Tacos">Tacos</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="item" to="/Paquetes">Paquetes</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="item" to="/Hamburguesas">Hamburguesas</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="item" to="/Contacto">Contacto</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="item" to="/Pedidos">Carrito({cart})</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
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
                        nombre = {nombre}
                        setNombres= {setNombres}
                        data = {data}
                        setData= {setData}
                        addData={addData}
                    />
                </Route>
                <Route path="/">
                    <Home onclick = {addcart}/>
                </Route> 
            </Switch>
        </Router>
    )
}

