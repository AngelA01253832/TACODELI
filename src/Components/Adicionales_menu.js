import React, { useState } from "react";
import ImgMediaCard from "./Product";
import {Box,Grid} from '@material-ui/core';
import adicionaleslist from "../Fake_backend/Adicionales_data";
import '../css/Menu.css'
function Adicionales({props, onclick}){
    
    return(
    <>
        <h1 className="title">Adicionales menu</h1>
        <div className="Menu-container">
        <Grid container align = "center" justify = "center" alignItems = "center">
                {
                    adicionaleslist.map((e) => 
                        <Grid item xs={8} sm={8} md={6} lg={6}>
                            <ImgMediaCard 
                            name = {e.name}
                            description = {e.description}
                            image = {e.image}
                            price= {e.price}
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

export default  Adicionales;