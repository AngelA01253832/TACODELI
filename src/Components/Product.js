
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../css/Product.css"
import Modal from "react-bootstrap/Modal"
function ImgMediaCard({image, name,description,price,calorias,onclick,ingredients}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const showprice = ()=> {
    onclick(price,name)
 }
 

  return (
    <>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="producto"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="name">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Porciones: {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calorias: {calorias}
        </Typography>
      </CardContent>
      <CardActions className="ButtonContainer">
        <Button className="buttoncard" size="small" onClick={(showprice)}>Añadir a mi orden</Button>
        <Button className="buttoncard" size="small" onClick={handleShow}>Ingredientes</Button>
      </CardActions>
    </Card>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ingredientes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ingredients.map(ingredient => 
          <ul>
            <li className="name">{ingredient}</li>
          </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImgMediaCard;