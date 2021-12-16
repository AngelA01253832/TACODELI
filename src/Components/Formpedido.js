import React, {useState} from "react";
import "../css/Formpedido.css"
import * as yup from "yup"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import Textfield from '@material-ui/core/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Form,Row,Col } from 'react-bootstrap';



const validationSchema = yup.object({
    Nombre: yup.string().required("Nombre requerido"),
    Apellido: yup.string().required("Apellido requerido"),
    Email: yup.string().email("Ingresa un email válido").required("Email requerido"),
    Celular: yup.string().required("Celular requerida"),
    Calle: yup.string().required("Calle requerida"),
    Colonia: yup.string().required("Colonia requerida"),
    Municipio: yup.string().required("Municipio requerido"),
    Estado: yup.string().required("Estado requerido"),
    CP: yup.string().required("Código Postal requerido"),
});

export default function Formpedido(props){
    
    
    const[envio] = useState(false);

    const formik = useFormik({
        initialValues: {
            Nombre: "",
            Apellido: "",
            Email: "",
            Celular:"",
            Calle: "",
            Colonia: "",
            Municipio:"",
            Estado:"",
            CP:""
        },
        onSubmit: values => {
          //console.log(JSON.stringify(values));
          props.handleShow()
          console.log(envio)
          console.log(JSON.stringify(values));
          
        },
        validationSchema: validationSchema
      });
      
        return(
            <div className="Form-container">
                <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col>
                    <Textfield 
                        className="text-field"
                        id="Nombre"
                        name="Nombre"
                        label="Nombre" 
                        value={formik.values.Nombre}
                        onChange={formik.handleChange}
                        error={formik.touched.Nombre && Boolean(formik.errors.Nombre)}
                        helperText={formik.touched.Nombre && formik.errors.Nombre}
                    />
                    </Col>
                    <Col>
                    <Textfield 
                        className="text-field"
                        id="Apellido"
                        name="Apellido"
                        label="Apellido" 
                        value={formik.values.Apellido}
                        onChange={formik.handleChange}
                        error={formik.touched.Apellido && Boolean(formik.errors.Apellido)}
                        helperText={formik.touched.Apellido && formik.errors.Apellido}
                    />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Textfield 
                            className="text-field"
                            id="Email"
                            name="Email"
                            label="Email" 
                            value={formik.values.Email}
                            onChange={formik.handleChange}
                            error={formik.touched.Email && Boolean(formik.errors.Email)}
                            helperText={formik.touched.Email && formik.errors.Email}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Textfield 
                            className="text-field"
                            id="Celular"
                            name="Celular"
                            label="Celular" 
                            value={formik.values.Celular}
                            onChange={formik.handleChange}
                            error={formik.touched.Celular && Boolean(formik.errors.Celular)}
                            helperText={formik.touched.Celular && formik.errors.Celular}
                        />
                    </Form.Group> 
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Textfield 
                        className="text-field"
                        id="Calle"
                        name="Calle"
                        label="Calle" 
                        value={formik.values.Calle}
                        onChange={formik.handleChange}
                        error={formik.touched.Calle && Boolean(formik.errors.Calle)}
                        helperText={formik.touched.Calle && formik.errors.Calle}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Textfield 
                        className="text-field"
                        id="Colonia"
                        name="Colonia"
                        label="Colonia" 
                        value={formik.values.Colonia}
                        onChange={formik.handleChange}
                        error={formik.touched.Colonia && Boolean(formik.errors.Colonia)}
                        helperText={formik.touched.Colonia && formik.errors.Colonia}
                    />
                </Form.Group>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Textfield 
                            className="text-field"
                            id="Municipio"
                            name="Municipio"
                            label="Municipio" 
                            value={formik.values.Municipio}
                            onChange={formik.handleChange}
                            error={formik.touched.Municipio && Boolean(formik.errors.Municipio)}
                            helperText={formik.touched.Municipio && formik.errors.Municipio}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                        <Select
                        id="Estado"
                        name="Estado"
                        value={formik.values.Estado}
                        label="Estado"
                        onChange={formik.handleChange}
                        error={formik.touched.Estado && Boolean(formik.errors.Estado)}
                        helperText={formik.touched.Estado && formik.errors.Estado}
                        >
                        <MenuItem value={"Aguascalientes"}>Aguascalientes</MenuItem>
                        <MenuItem value={"Baja California"}>Baja California</MenuItem>
                        <MenuItem value={"Baja California Sur"}>Baja California Sur</MenuItem>
                        <MenuItem value={"Campeche"}>Campeche</MenuItem>
                        <MenuItem value={"Chiapas"}>Chiapas</MenuItem>
                        <MenuItem value={"Chihuahua"}>Chihuahua</MenuItem>
                        <MenuItem value={"Coahuila"}>Coahuila</MenuItem>
                        <MenuItem value={"Colima"}>Colima</MenuItem>
                        <MenuItem value={"Durango"}>Durango</MenuItem>
                        <MenuItem value={"Guanajuato"}>Guanajuato</MenuItem>
                        <MenuItem value={"Guerrero"}>Guerrero</MenuItem>
                        <MenuItem value={"Hidalgo"}>Hidalgo</MenuItem>
                        <MenuItem value={"Jalisco"}>Jalisco</MenuItem>
                        <MenuItem value={"Estado de México"}>Estado de México</MenuItem>
                        <MenuItem value={"Michoacán"}>Michoacán</MenuItem>
                        <MenuItem value={"Morelos"}>Morelos</MenuItem>
                        <MenuItem value={"Nayarit"}>Nayarit</MenuItem>
                        <MenuItem value={"Nuevo León"}>Nuevo León</MenuItem>
                        <MenuItem value={"Oaxaca"}>Oaxaca</MenuItem>
                        <MenuItem value={"Puebla"}>Puebla</MenuItem>
                        <MenuItem value={"Querétaro"}>Querétaro</MenuItem>
                        <MenuItem value={"Quintana Roo"}>Quintana Roo</MenuItem>
                        <MenuItem value={"San Luis Potosí"}>San Luis Potosí</MenuItem>
                        <MenuItem value={"Sinaloa"}>Sinaloa</MenuItem>
                        <MenuItem value={"Sonora"}>Sonora</MenuItem>
                        <MenuItem value={"Tabasco"}>Tabasco</MenuItem>
                        <MenuItem value={"Tamaulipas"}>Tamaulipas</MenuItem>
                        <MenuItem value={"Tlaxcala"}>Tlaxcala</MenuItem>
                        <MenuItem value={"Veracruz"}>Veracruz</MenuItem>
                        <MenuItem value={"Yucatán"}>Yucatán</MenuItem>
                        <MenuItem value={"Zacatecas"}>Zacatecas</MenuItem>
                        </Select>
                    </FormControl> 
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Textfield 
                        className="text-field"
                        id="CP"
                        name="CP"
                        label="CP" 
                        value={formik.values.CP}
                        onChange={formik.handleChange}
                        error={formik.touched.CP && Boolean(formik.errors.CP)}
                        helperText={formik.touched.CP && formik.errors.CP}
                    />
                    </Form.Group>
                    </Row>
                    
                    <div className="Form-container">
                    
                        <Button type="submit" variant="outlined" >Validar mi informacion</Button>
                        

                    </div>
                    
                </Form>
                 
            </div>
        )}
