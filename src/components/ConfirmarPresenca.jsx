import React, { useState } from "react";
import Select from "react-select";
import guests from "../data/guests.json";

export default function ConfirmarPresenca({ className }) {
  const [guest, setGuest] = useState("");
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
      border: "1px solid #DDEBDD",
      padding: "2px 4px",
      fontSize: 16,
      boxShadow: "none",
      textAlign: "start",
      "&:hover": { borderColor: "#2E5A34" },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 12,
      textAlign: "start",
      overflow: "hidden",
    }),
  };

  const normalize = (str) => {
    return str
    ?.normalize("NFD")                 // separa acentos das letras
    .replace(/[\u0300-\u036f]/g, "")  // remove os acentos
    .toLowerCase()
    .trim();
  }
  

  async function handleSubmit(e) {
    console.log(guest);
    e.preventDefault();

    const guestInvited = guests.find(
      (g) =>
        normalize(g.convidado) === normalize(guest)
    );

    if (guestInvited) {
      setGuestData(guestInvited);
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
      const res = await fetch("http://localhost:8080/api/confirmar-presenca", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: guestData.convidado,
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
          color: "#2E5A34",
        }}
      >
        <input
          type="text"
          placeholder="Nome do convidado"
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
          required
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid #DDEBDD",
            fontSize: 16,
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#DDEBDD",
            color: "#2E5A34",
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
              background: "#DDEBDD",
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
                color: "#2E5A34",
                backgroundColor: "#DDEBDD",
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
                    backgroundColor: "#2E5A34",
                    color: "#DDEBDD",
                  }}
                >
                  Fechar
                </button>
              </>
            )}

            {popupType === "success" && guestData && (
              <>
                <h2>
                  Olá, {guestData.convidado}!
                </h2>
                <p style={{ marginBottom: 12 }}>
                  Seu convite permite até{" "}
                  <strong>{guestData.quantidade}</strong> pessoas.
                </p>

                <label style={{ display: "block", marginBottom: 8 }}>
                  Quantas pessoas irão comparecer?
                </label>
                <Select
                  value={{ value: attending, label: attending.toString() }}
                  onChange={(option) => setAttending(Number(option.value))}
                  options={Array.from({ length: guestData.quantidade }, (_, i) => ({
                    value: i + 1,
                    label: (i + 1).toString(),
                  }))}
                  styles={customStyles}
                  placeholder="Selecione a quantidade..."
                />

                <button
                  onClick={handleConfirm}
                  disabled={loading}
                  style={{
                    backgroundColor: "#2E5A34",
                    color: "#DDEBDD",
                    border: "none",
                    borderRadius: 24,
                    padding: "10px 32px",
                    cursor: "pointer",
                    opacity: loading ? 0.7 : 1,
                    marginTop: 20,
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
