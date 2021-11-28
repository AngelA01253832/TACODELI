import React, { useState } from "react";
import ImgMediaCard from "./Product";
import {Box,Grid} from '@material-ui/core';
import pizzalist from '../Fake_backend/Pizza_data'
import '../css/Menu.css'

export default function Pizza_menu({props, onclick}){
//let onclick = props.onclick
    return(
    <>
        <h1 className="title">Pizza Menu</h1>
        <div className="Menu-container">
            <Grid container align = "center" justify = "center" alignItems = "center">
                {
                    pizzalist.map((e) => 
                        <Grid item xs={12} sm={8} md={6} lg={6}>
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
