import React from 'react';
import './estilos.css';

export function Form() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        // Coloca aquí la lógica para manejar el envío del formulario
    };

    return (
        <div>
            <div id="menu">
                <i className="fa-solid fa-bars"></i>
                <h1>Lugares Seguros</h1>
                <i className="fa-regular fa-user"></i>
            </div>

            <section className="form" onSubmit={handleSubmit}>
                <h2>Ingresa un lugar seguro</h2>

                <input className="contenido" type="text" name="nombre" id="nombre" placeholder="Nombre del lugar" />
                <input className="contenido" type="text" name="descripcion" id="descripcion" placeholder="Describe el lugar" />
                <input className="contenido" type="text" name="estado" id="estado" placeholder="Estado" />
                <input className="contenido" type="text" name="ciudad" id="ciudad" placeholder="Ciudad" />
                <input className="contenido" type="text" name="colonia" id="colonia" placeholder="Colonia" />
                <input className="contenido" type="text" name="calle" id="calle" placeholder="Calle" />
                <input className="contenido" type="text" name="codigo postal" id="codigopostal" placeholder="Código Postal" />

                <button type="reset">Registrar Lugar</button>
            </section>

            <div id="footer">
                <h3>Lugares Seguros</h3>
                <div>
                    <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook"> </i> </a>
                    <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i> </a>
                    <a href="https://www.tiktok.com/"> <i className="fa-brands fa-tiktok"></i> </a>
                </div>
                <p>Política de Privacidad</p>
            </div>
        </div> 
    );
}

