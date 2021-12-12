import React, { useState } from 'react';
import Progress from './Stepprogress';
import "../css/Pedido.css"
import imagepedido from '../img/entrega.png'
// import emptycart from '../img/carritoVacio.png'

function Pedido(props){
    const [pedidos, setPedidos] = useState(false);
    let pago = props.pago
    let cart = props.cart
    
    const orderverification = (e) => setPedidos(e)
    const alertapedido = () => alert("No hay pedidos existentes") 
    if(pedidos === false){
        return(
        <>
            <h1 className="title">Pedidos existentes: {cart}</h1>
            <h2 className="title">Cantidad a pagar: ${pago}</h2>
            <div className="false-order-container">
                <button type="button" class="btn btn-success" onClick={ cart === 0  ? alertapedido : orderverification}>Confirmar orden</button>
            </div>
        </>
        )
    }
    return(
    <>

            <h1 className="title">Status de mi pedido</h1>
            <div className="img-progress-container">
                <img src={imagepedido} alt="img-food"></img>
            </div>
            <div className = "StepProgress">
                <div className = "Progress-container">
                    <Progress></Progress>    
                </div>
            </div>

    </>
    )
}


export default Pedido;