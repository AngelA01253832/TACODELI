import React, { useState } from 'react';
import Progress from './Stepprogress';
import "../css/Pedido.css"
import imagepedido from '../img/entrega.png'
import Formpedido from './Formpedido'
import { Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import FormPago from "./Pago";
import Modal from "react-bootstrap/Modal"
import Button from '@mui/material/Button';


const stripePromise = loadStripe("pk_test_51K7CnBHPN4oaxG8l9NRDQFLb44XKuF3JPwkJXGpdKzIH98usUxLfh6r9Bz8zVWMiKtvZLkLwWnehIlXG6shqPzxr00B2xpy7fo")

export default function Pedido(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pedidos, setPedidos] = useState(false);
    const [envio, setEnvio] = useState(false);


    let pago = props.pago
    let cart = props.cart
    let names = props.nombre


    const orderverification = (e) => setPedidos(e)
    const alertapedido = () => alert("No hay pedidos existentes") 

    if(pedidos === false  && envio === false){
        return(
        <>
            <h1 className="title">Productos existentes: {cart}</h1>
            <div className='Container'>
                <div className="Products-container">
                    {names.map(name => 
                    <ul>
                        <li className="name">{name}</li>
                    </ul>
                    )}
                </div>
            </div>
            <h2 className="title">Cantidad a pagar: ${pago}</h2>
            <div className="false-order-container">
                <button type="button" className="btn btn-success" onClick={ cart === 0  ? alertapedido : orderverification}>Procesar mi orden</button>
            </div>
        </>
        )
    }
    if(envio === false){
        return(
            <>
            <h1 className="title">Datos Pago</h1>
            <Formpedido pago = {pago} onClick={() => setEnvio(true)} handleShow = {handleShow} />
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Cantidad a pagar: ${pago}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* <div className="stripe-container"> */}
                    <Elements stripe={stripePromise}>
                        <FormPago pago={pago} onClick={() => setEnvio(true)}/>
                    </Elements>
                {/* </div> */}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            
            </>
        
        )
    }
    if(envio === true){
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
            {/* <h1 className="title">Pago de la orden</h1>
            <h2 className="title">Cantidad a pagar: ${pago}</h2>
            <div className="stripe-container">
                <Elements stripe={stripePromise}>
                    <FormPago pago={pago} />
                </Elements>
            </div> */}
            
        </>
        )}
    // return(
    // <>
        
        
    //         {/* <h1 className="title">Status de mi pedido</h1>
    //         <div className="img-progress-container">
    //             <img src={imagepedido} alt="img-food"></img>
    //         </div>
    //         <div className = "StepProgress">
    //             <div className = "Progress-container">
    //                 <Progress></Progress>    
    //             </div>
    //         </div> */}
            

    // </>
    // )
}
