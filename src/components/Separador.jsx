import React from "react";

const Separador = ({ backgroundColor = "#ffffff" }) => {
  return (
    <div
      class="separador"
      style={{
        backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <img
        src="https://cdn-assets-legacy.casar.com/img/sdn/48/floral-dark.svg"
        alt="Floral"
        style={{ maxWidth: "200px", maxHeight: "200px" }}
      />
    </div>
  );
};

export default Separador;
