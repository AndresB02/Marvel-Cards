import React from "react";
import "./LenguajesVistas.css";

function LenguajesVistas({ len }) {
  return (
    <div className="lenVista">
      <h1 className="tituloMarvel">{len.ntitulo}</h1>
      <p>{len.ndescripcion}</p>
      <img src={len.img} alt={len.img + "img"} />
    </div>
  );
}

export default LenguajesVistas;
