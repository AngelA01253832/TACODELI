import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../css/Product.css"
function ImgMediaCard({image, name,description,price,calorias,onclick}) {

  //let onclick = props.onclick
 const showprice = ()=> {
    onclick(price)
 }

  return (
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
      <CardActions>
        <Button size="small" onClick={(showprice)}>Añadir a mi orden</Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;