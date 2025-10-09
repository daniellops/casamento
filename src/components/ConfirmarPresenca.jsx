import React, { useState } from "react";
import Select from "react-select";
import guests from "../data/guests.json";

export default function ConfirmarPresenca({ className }) {
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [phoneDigits, setPhoneDigits] = useState("");
  const [attending, setAttending] = useState(1);
  const [popupType, setPopupType] = useState(null);
  const [guestData, setGuestData] = useState(null);
  const [loading, setLoading] = useState(false);

  const guestOptions = guests.map((g) => ({
    value: g.name,
    label: g.name,
  }));

  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: 12,
      border: "1px solid #CCC",
      padding: "2px 4px",
      fontSize: 16,
      boxShadow: "none",
      textAlign: "start",
      "&:hover": { borderColor: "#907357" },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 12,
      textAlign: "start",
      overflow: "hidden",
    }),
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const guest = guests.find(
      (g) =>
        g.name.toLowerCase() === selectedGuest?.value.toLowerCase() &&
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

  async function handleConfirm() {
    if (!guestData) return;
    try {
      setLoading(true);
      const res = await fetch("/api/confirmar-presenca", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: guestData.name,
          celular4: phoneDigits,
          quantidade: attending,
        }),
      });

      if (!res.ok) throw new Error("Falha ao confirmar presença");

      const data = await res.json();
      console.log("✅ Presença confirmada:", data);
      setPopupType(null);
      alert("Presença confirmada com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar confirmação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="confirmar-presenca" className={className}>
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
          color: "#522F1A",
        }}
      >
        <Select
          options={guestOptions}
          styles={customStyles}
          placeholder="Selecione seu nome..."
          value={selectedGuest}
          onChange={(val) => setSelectedGuest(val)}
          isClearable
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
            backgroundColor: "#E5DFD8",
            color: "#522F1A",
            padding: "12px 20px",
            borderRadius: 24,
            border: "none",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Verificar
        </button>
      </form>

      {/* Popup */}
      {popupType && (
        <div
          className="bg-2"
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
                color: "#8D4E2B",
                backgroundColor: "#fff",
                position: "absolute",
                top: 16,
                right: 16,
                border: "none",
                background: "none",
                fontSize: 20,
                cursor: "pointer"
              }}
            >
              ×
            </button>

            {popupType === "error" && (
              <>
                <h2>
                  Convite não encontrado
                </h2>
                <p style={{ marginBottom: 20 }}>
                  Não encontramos seus dados. Por favor, entre em contato com os
                  noivos.
                </p>
                <button
                  onClick={closeModal}
                  style={{
                    background: "red",
                    border: "none",
                    borderRadius: 24,
                    padding: "10px 32px",
                    cursor: "pointer",
                    backgroundColor: "#8D4E2B",
                    color: "#E5DFD8",
                  }}
                >
                  Fechar
                </button>
              </>
            )}

            {popupType === "success" && guestData && (
              <>
                <h2>
                  Olá, {guestData.name}!
                </h2>
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
                    height: "30px",
                    borderRadius: 12,
                    padding: "14px 16px",
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
                  disabled={loading}
                  style={{
                    backgroundColor: "#8D4E2B",
                    color: "#E5DFD8",
                    border: "none",
                    borderRadius: 24,
                    padding: "10px 32px",
                    cursor: "pointer",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? "Enviando..." : "Confirmar Presença"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
