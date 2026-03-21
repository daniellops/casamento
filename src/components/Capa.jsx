// import React from "react";

// export default function Capa() {
//   return (
//     <div className="capa-section">
//       <img
//         src="/arte-bg.png"
//         alt="Save the Date Talita & Lucas"
//         className="capa-image"
//       />
//     </div>
//   );
// }

// export default function Capa({ className }) {
//   return (
//     <section id="capa" className={className}>
//       <div>
//         {/* Nomes + pincelada */}
//         <div
//           style={{
//             position: "relative",
//             display: "inline-block",
//             zIndex: 0, // cria contexto
//           }}
//         >
//           <img
//             src="/capa.png"
//             alt=""
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: "300px", // importante: define tamanho
//               zIndex: -1,
//             }}
//           />

//           <h1 style={{ position: "relative", zIndex: 1, fontFamily: "Eyesome Script" }}>Marília</h1>
//           <h1 style={{ position: "relative", zIndex: 1, fontFamily: "Eyesome Script" }}>e Sullen</h1>
//         </div>

//         <p>CONVIDAM PARA CELEBRAÇÃO DO SEU CASAMENTO</p>

//         <div>
//           <span>—</span>
//           <span>Maio</span>
//           <span>—</span>
//         </div>

//         <div>29</div>
//         <div>2026</div>

//         <div>
//           <span>Sexta</span>
//           <span>19h00</span>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Capa({ className }) {
  return (
    <section id="capa" className={className}>
      <img src="/4.png" className="img-canto-esquerdo" alt="Decorativo esquerdo" />
      <img src="/5.png" className="img-canto-direito" alt="Decorativo direito" />
      <div className="capa-wrapper">
        <p className="capa-topo">
          BEM-VINDOS AO CASAMENTO DE
        </p>

        <div className="capa-nomes">
          {/* <img src="/capa.png" alt="" className="capa-brush" /> */}

          <h1 className="capa-nome">Marília</h1>
          <h1 className="capa-nome destaque and">E</h1>
          <h1 className="capa-nome destaque">Suellen</h1>
        </div>

        <p className="capa-data">
          29 DE MAIO DE 2026
        </p>
      </div>
    </section>
  );
}