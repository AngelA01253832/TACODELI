import React, { useState } from "react";
import "../css/contacto.css";
import emailjs from "emailjs-com";

const Resultado = () => {
  return (
    <p className="resultado">
      Tu mensaje ha sido enviado exitosamente. Nuestro equipo se pondra en
      contacto contigo
    </p>
  );
};

function Contacto() {
  //Uso de hooks useState
  const [resultado, verResultado] = useState(false);

  //funcion que envia el correo
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_383fcya",
        "template_jjw236a",
        e.target,
        "user_5gPOrUuIN3u20KI2uhj6e"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    //Limpiar el formulario
    e.target.reset();
    verResultado(true);
  };

  //Esconder el mensaje de exito
  setTimeout(() => {
    verResultado(false);
  }, 4000);

  return (
    <section className="datos_contacto">
      <h1 className="title">Contacto</h1>
      <div className="row_section">
        <div className="column_section">
          <form id="formulario" className="formulario" onSubmit={sendEmail}>
            {/* Uso del condicional rendering utilizando useState */}
            <div>{resultado ? <Resultado /> : null}</div>
            <div className="formulario__grupo" id="grupo__nombre">
              <label htmlFor="nombre" className="formulario__label">
                Nombre Completo
              </label>
              <div className="formulario__grupo-input">
                <input
                  className="formulario__input"
                  name="nombre"
                  type="text"
                  id="nombre"
                  required
                />
              </div>
            </div>
            <div className="formulario__grupo" id="grupo__telefono">
              <label htmlFor="telefono" className="formulario__label">
                Número telefónico
              </label>
              <div className="formulario__grupo-input">
                <input
                  className="formulario__input"
                  name="telefono"
                  type="text"
                  id="telefono"
                  required
                />
              </div>
            </div>
            <div className="formulario__grupo" id="grupo__email">
              <label htmlFor="email" className="formulario__label">
                Correo electrónico
              </label>
              <div className="formulario__grupo-input">
                <input
                  className="formulario__input"
                  name="email"
                  type="text"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="formulario__grupo" id="grupo__mensaje">
              <label htmlFor="mensaje" className="formulario__label">
                Mensaje y/o Sugerencia
              </label>
              <div className="formulario__grupo-input">
                <textarea
                  className="formulario__input"
                  name="mensaje"
                  id="mensaje"
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>
            <div className="formulario__grupo formulario__grupo-btn-enviar">
              <button type="submit" className="formulario__btn">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="column_section">
          <h2>Sistema de atención a clientes y consumidores</h2>
          <hr />
          <p><strong>Déjanos tus mensajes y/o sugerencias a través de este formulario, nos gustaría escucharte</strong> </p>
          <strong>También nos puedas contactar a través de los siguientes medios</strong>
          <ul>
            <li>
              <strong>Télefono:</strong> 5548592615
            </li>
            <li>
              <strong>Email:</strong> atencion.clientes@delipizza.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
