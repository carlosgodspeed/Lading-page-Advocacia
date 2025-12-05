import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "5513000000";
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-button"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
