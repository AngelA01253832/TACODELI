import React, { useState,useEffect } from "react";
import "../css/Recomendation.css"
import ImgMediaCard from "./Product";
import {Grid} from '@material-ui/core';
import axios from "axios";
function Recomendation({onclick}){
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    useEffect(()=>{
        setLoading(true)
        axios.get('https://delivery-app-appi.herokuapp.com/v1/platos')
        .then(res => {
            const response = res.data
            const randomvalues = []
            const positions = []
            let i,r;
            for(i = 0; i < response.length; i++) positions[i] = i;
            for (i = 0; i < 12; i++) {
                r = Math.floor(Math.random() * positions.length);
                randomvalues.push(response[positions[r]]);
                positions.splice(r, 1);
              }
            setData(randomvalues)
            setLoading(false);
        }).catch(err => {
            console.log(err) 
        })
    },[])

    if(loading){
        return(
            <div className="spinner-container">
                <div className="d-flex justify-content-center">
                    <div id ="spinner" className="spinner-border text-primary"  role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>
        )
    }

    return(  
         <div>
             <h1 className="title">Recomendaciones</h1>
             <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <div className="Cardcontainer">
                            <div className="Menu-container" key={data.slice(0, 6).id}>
                                <Grid container align = "center" justifyContent = "center" alignItems = "center" >
                                {
                                    data.slice(0, 6).map((e) => 
                                        <Grid item xs={8} sm={8} md={6} lg={4}>
                                            <ImgMediaCard 
                                            name = {e.nombre}
                                            description = {e.porciones}
                                            image = {e.imagen}
                                            price= {e.precio.$numberDecimal}
                                            calorias= {e.calorias}
                                            onclick = {onclick}
                                            ingredients = {e.ingredientes}
                                            />    
                                        </Grid>
                                    )
                                }
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="Menu-container" key={data.slice(6, 12).id}>
                            <Grid container align = "center"  alignItems = "center" >
                                {
                                    data.slice(6, 12).map((e) => 
                                        <Grid item xs={10} sm={8} md={6} lg={4}>
                                            <ImgMediaCard 
                                            name = {e.nombre}
                                            description = {e.porciones}
                                            image = {e.imagen}
                                            price= {e.precio.$numberDecimal}
                                            calorias= {e.calorias}
                                            onclick = {onclick}
                                            ingredients = {e.ingredientes}
                                            />    
                                        </Grid>
                                    )
                                }
                            </Grid> 
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
         </div>
    )
}

export default Recomendation;