import React, {useEffect, useState } from "react";
import ImgMediaCard from "./Product";
import {Grid} from '@material-ui/core';
import '../css/Menu.css'
import axios from "axios";
import Pagination from "./Pagination";

    

export default function PaquetesMenu({ onclick}){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

    useEffect(()=>{
        setLoading(true)
        axios.get('https://delivery-app-appi.herokuapp.com/v1/platos')
        .then(res => {
            setData(res.data.filter(data => data.nombre.startsWith('orden')))
            setLoading(false);
        }).catch(err => {
            console.log(err) 
        })
    },[])

    const indexlast = currentPage * postsPerPage;
    const indexfirst = indexlast - postsPerPage;
    const currentData = data.slice(indexfirst, indexlast);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
    <>
        <h1 className="title">Paquetes</h1>
        <div className="Menu-container" key={data.id}>
            <Grid container align = "center" justifyContent = "center" alignItems = "center">
                {
                    currentData.map((e) => 
                        <Grid item xs={12} sm={8} md={6} lg={4}>
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
        <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>

    </>

    )
}
