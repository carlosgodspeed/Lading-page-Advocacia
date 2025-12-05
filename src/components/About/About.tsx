import { Award, Clock, Shield, Users } from "lucide-react";
import aboutImage from "@/assets/about-section.jpg";
import "./About.css";

const About = () => {
  const stats = [
    { icon: <Users className="stat-icon" />, value: "500+", label: "Clientes Atendidos" },
    { icon: <Award className="stat-icon" />, value: "95%", label: "Taxa de Sucesso" },
    { icon: <Clock className="stat-icon" />, value: "10+", label: "Anos de Experiência" },
    { icon: <Shield className="stat-icon" />, value: "100%", label: "Compromisso" },
  ];

  const handleContact = () => {
    const element = document.querySelector("#contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src={aboutImage}
              alt="Sobre o escritório"
              className="about-image"
            />
            <div className="about-badge">
              <p className="about-badge-value">10+</p>
              <p className="about-badge-label">Anos de Experiência</p>
            </div>
          </div>

          <div className="about-content">
            <h2 className="about-title">
              Advocacia Comprometida com Seus Direitos
            </h2>
            <p className="about-text">
              Com mais de uma década de experiência em Direito Trabalhista e Previdenciário, 
              nosso escritório se destaca pelo atendimento humanizado e pela busca incansável 
              pelos melhores resultados para nossos clientes.
            </p>
            <p className="about-text">
              Acreditamos que cada caso é único e merece atenção personalizada. Nossa equipe 
              está preparada para oferecer soluções jurídicas eficazes, sempre com transparência 
              e ética profissional.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon-wrapper">{stat.icon}</div>
                  <div>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
