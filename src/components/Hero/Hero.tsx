import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";
import "./Hero.css";

const Hero = () => {
  const handleContact = () => {
    const element = document.querySelector("#contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta", "_blank");
  };

  return (
    <section className="hero">
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Defenda Seus Direitos
          </h1>
          <p className="hero-subtitle">
            Especialistas em Direito Trabalhista e Previdenciário. Atendimento humanizado e resultados efetivos.
          </p>
          <div className="hero-buttons">
            <button className="hero-button hero-button-primary" onClick={handleWhatsApp}>
              <Phone className="hero-button-icon" size={20} />
              Falar com Especialista
            </button>
            <button className="hero-button hero-button-secondary" onClick={handleContact}>
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>

      <div className="hero-gradient" />
    </section>
  );
};

export default Hero;
