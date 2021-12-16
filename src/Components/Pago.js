import React from "react";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import '../css/Pago.css'

export default function FormPago(props) {
    
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        const cardElement = elements.getElement(CardElement)
        e.preventDefault()

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: cardElement,
        });
        
        if(!error){
            console.log(paymentMethod)
            alert("Pago exitoso")
            props.onClick()
            
            
            //  const {data} = await axios.post("", {
            //      id,
            //      amount: props.pago,
                 
            //  })
        };
    };

    return(
        <>
        
        <form onSubmit={handleSubmit}>
                <CardElement/>
                <div id="pago" >
                    <button className="btn btn-success">Pagar</button>
                </div>
        </form>
        </>
)}