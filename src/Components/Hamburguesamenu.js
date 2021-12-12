import React, {useEffect, useState } from "react";
import ImgMediaCard from "./Product";
import {Grid} from '@material-ui/core';
import '../css/Menu.css'
import axios from "axios";

    

export default function HamburguesaMenu({ onclick}){
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://delivery-app-appi.herokuapp.com/v1/platos')
        .then(res => {
            setData(res.data.filter(data => data.nombre.startsWith('hamburguesa')))
        }).catch(err => {
            console.log(err) 
        })
    },[])

    return(
    <>
        <h1 className="title">Hamburguesas Menu</h1>
        <div className="Menu-container" key={data.id}>
            <Grid container align = "center" justifyContent = "center" alignItems = "center">
                {
                    data.map((e) => 
                        <Grid item xs={12} sm={8} md={6} lg={6}>
                            <ImgMediaCard 
                            name = {e.nombre}
                            description = {e.porciones}
                            image = {e.imagen}
                            price= {e.precio.$numberDecimal}
                            calorias= {e.calorias}
                            onclick = {onclick}
                            />    
                        </Grid>
                    )
                }
            </Grid>
        </div>
    </>

    )
}
