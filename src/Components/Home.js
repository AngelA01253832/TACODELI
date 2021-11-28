import React, { useState } from 'react'
import Header from '../Components/Header'
import Recomendation from './Recomendation';

function Home(props){
    let onclick = props.onclick
    return(
        <>
            <Header/>
            <Recomendation onclick = {onclick}/>
        </>
    )
}

export default Home;