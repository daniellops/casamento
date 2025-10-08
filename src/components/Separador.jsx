import React from "react";

const Separador = ({ backgroundColor = "#ffffff" }) => {
  return (
    <div
      className="separador"
      style={{ backgroundColor }}
    >
      <img
        src="https://cdn-assets-legacy.casar.com/img/sdn/48/floral-dark.svg"
        alt="Floral"
      />
    </div>
  );
};

export default Separador;
