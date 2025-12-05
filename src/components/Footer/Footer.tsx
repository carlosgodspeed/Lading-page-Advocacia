import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-brand-title">Suprema Jurídica</h3>
            <p className="footer-brand-text">
              Defendendo seus direitos com excelência e comprometimento.
            </p>
          </div>
          <div className="footer-links-section">
            <h4 className="footer-section-title">Links Rápidos</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Início</Link></li>
              <li><a href="#sobre" className="footer-link">Sobre</a></li>
              <li><a href="#servicos" className="footer-link">Serviços</a></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4 className="footer-section-title">Áreas de Atuação</h4>
            <ul className="footer-links-list">
              <li className="footer-text">Direito Trabalhista</li>
              <li className="footer-text">Direito Previdenciário</li>
              <li className="footer-text">Aposentadorias</li>
              <li className="footer-text">Benefícios INSS</li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4 className="footer-section-title">Contato</h4>
            <ul className="footer-links-list">
              <li className="footer-text">(11) 99999-9999</li>
              <li className="footer-text">supremajuridica@gmail.com</li>
              <li className="footer-text">Av. Paulista,São Paulo - SP</li>
              <li className="footer-text">São Paulo - SP</li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              aria-label={social.label}
              className="footer-social-link"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="footer-copyright">
          <p>© {currentYear} Suprema Jurídica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
