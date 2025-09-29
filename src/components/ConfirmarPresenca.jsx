import React, { useState } from "react";
import guests from "../data/guests.json";

export default function ConfirmarPresenca() {
  const [name, setName] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [guestData, setGuestData] = useState(null);
  const [attending, setAttending] = useState(1);
  const [popupType, setPopupType] = useState(null); // "success" | "error"

  function handleSubmit(e) {
    e.preventDefault();

    const guest = guests.find(
      (g) =>
        g.name.toLowerCase() === name.trim().toLowerCase() &&
        g.phone.slice(-4) === phoneDigits
    );

    if (guest) {
      setGuestData(guest);
      setAttending(1);
      setPopupType("success");
    } else {
      setPopupType("error");
    }
  }

  function closeModal() {
    setPopupType(null);
  }

  function handleConfirm() {
    console.log({
      name: guestData.name,
      confirmedGuests: attending,
    });

    setPopupType(null);
    alert("Presença confirmada com sucesso!");
  }

  return (
    <section id="confirmar-presenca" style={{ marginTop: 40 }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>
        Confirme sua presença
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 400,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid #CCC",
            fontSize: 16,
          }}
        />

        <input
          type="text"
          maxLength={4}
          placeholder="4 últimos dígitos do celular"
          value={phoneDigits}
          onChange={(e) => setPhoneDigits(e.target.value)}
          required
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid #CCC",
            fontSize: 16,
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            borderRadius: 24,
            background: "#907357",
            color: "#fff",
            border: "none",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Verificar
        </button>
      </form>

      {/* Modal */}
      {popupType && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#FFF",
              borderRadius: 16,
              padding: 32,
              minWidth: 350,
              textAlign: "center",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                border: "none",
                background: "none",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              ×
            </button>

            {popupType === "error" && (
              <>
                <h3 style={{ marginBottom: 12, color: "red" }}>
                  Convite não encontrado
                </h3>
                <p style={{ marginBottom: 20 }}>
                  Não encontramos seus dados. Por favor, entre em contato com os
                  noivos.
                </p>
                <button
                  onClick={closeModal}
                  style={{
                    background: "red",
                    color: "#fff",
                    border: "none",
                    borderRadius: 24,
                    padding: "10px 32px",
                    cursor: "pointer",
                  }}
                >
                  Fechar
                </button>
              </>
            )}

            {popupType === "success" && guestData && (
              <>
                <h3 style={{ marginBottom: 12, color: "#907357" }}>
                  Olá, {guestData.name}!
                </h3>
                <p style={{ marginBottom: 12 }}>
                  Seu convite permite até{" "}
                  <strong>{guestData.maxGuests}</strong> pessoas.
                </p>

                <label style={{ display: "block", marginBottom: 8 }}>
                  Quantas pessoas irão comparecer?
                </label>
                <select
                  value={attending}
                  onChange={(e) => setAttending(Number(e.target.value))}
                  style={{
                    padding: "10px",
                    borderRadius: 12,
                    border: "1px solid #CCC",
                    marginBottom: 20,
                    width: "100%",
                  }}
                >
                  {Array.from(
                    { length: guestData.maxGuests },
                    (_, i) => i + 1
                  ).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleConfirm}
                  style={{
                    background: "#907357",
                    color: "#fff",
                    border: "none",
                    borderRadius: 24,
                    padding: "10px 32px",
                    cursor: "pointer",
                  }}
                >
                  Confirmar Presença
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
