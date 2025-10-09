// src/components/PopupHandler.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function PopupHandler() {
  const [searchParams] = useSearchParams();
  const [isRendered, setIsRendered] = useState(false); // controla a renderização do modal
  const [isVisible, setIsVisible] = useState(false);   // controla a animação (fade)
  const [popupType, setPopupType] = useState(null);

  // Mapeamento de títulos / corpos (ajuste conforme quiser)
  const titleMap = {
    confirmado: "Presença confirmada! 🎉",
    sucesso: "Operação concluída!",
    pagamento_sucesso: "Pagamento confirmado!",
    erro: "Algo deu errado 😕",
    failure: "Pagamento não concluído",
  };

  const bodyMap = {
    confirmado:
      "Estamos muito felizes em saber que você vai celebrar conosco. Até lá! 💛",
    pagamento_sucesso:
      "Recebemos o pagamento. Obrigado pelo presente.",
    erro: "Ocorreu um problema. Tente novamente ou entre em contato com os noivos.",
    failure: "O pagamento não foi concluído. Você pode tentar novamente.",
  };

  // Lê vários parâmetros possíveis e ativa o modal
  useEffect(() => {
    const popup =
      searchParams.get("popup") ||
      searchParams.get("status") ||
      searchParams.get("result") ||
      null;

    if (popup) {
      setPopupType(popup);
      setIsRendered(true);
      // start animation a tick after render
      setTimeout(() => setIsVisible(true), 10);
    } else {
      // se não tiver popup na URL, garante que feche
      // (se já estiver renderizado, fazemos fade out)
      if (isRendered) {
        setIsVisible(false);
        setTimeout(() => setIsRendered(false), 220);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Fecha o popup e remove os params da URL (sem recarregar)
  function closePopup() {
    setIsVisible(false);
    setTimeout(() => {
      // remove os parâmetros que usamos
      const url = new URL(window.location.href);
      url.searchParams.delete("popup");
      url.searchParams.delete("status");
      url.searchParams.delete("result");
      window.history.replaceState({}, "", url.pathname + url.search);
      setIsRendered(false);
      setPopupType(null);
    }, 200); // tempo para animação
  }

  if (!isRendered) return null;

  const title = titleMap[popupType] || `Aviso: ${popupType}`;
  const body = bodyMap[popupType] || `Parâmetro recebido: "${popupType}".`;

  return (
    <div
      aria-modal="true"
      role="dialog"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.48)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 220ms ease",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      onMouseDown={(e) => {
        // fechar ao clicar fora do modal
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div
        style={{
          width: "min(92%, 420px)",
          background: "#fff",
          borderRadius: 14,
          padding: "28px 22px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
          textAlign: "center",
          transform: isVisible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
          opacity: isVisible ? 1 : 0,
          transition: "all 220ms ease",
          position: "relative",
          color: "#522F1A" // cor escura principal
        }}
      >
        {/* Botão X */}
        <button
          onClick={closePopup}
          aria-label="Fechar"
          style={{
            position: "absolute",
            top: 10,
            right: 12,
            border: "none",
            background: "transparent",
            fontSize: 22,
            lineHeight: 1,
            cursor: "pointer",
            color: "#907357"
          }}
        >
          ×
        </button>

        <h3 style={{ margin: "6px 0 12px", color: "#907357", fontFamily: "Bubblegum Sans, cursive" }}>
          {title}
        </h3>

        <p style={{ margin: "0 0 12px", fontFamily: "Athelas, serif", color: "#522F1A" }}>
          {body}
        </p>

        {/* Exibir params inteiros para debug (útil se o texto não aparecer) */}
        {/* <details style={{ textAlign: "left", marginTop: 10, color: "#522F1A" }}>
          <summary style={{ cursor: "pointer", fontSize: 13 }}>Mostrar parâmetros (debug)</summary>
          <pre style={{ fontSize: 13, whiteSpace: "pre-wrap", marginTop: 8 }}>
            {JSON.stringify(Object.fromEntries(searchParams.entries()), null, 2)}
          </pre>
        </details> */}

        <div style={{ marginTop: 18 }}>
          <button
            onClick={closePopup}
            style={{
              background: "#907357",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "8px 18px",
              cursor: "pointer"
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
