import { Briefcase, Users, FileText, Scale, Heart, TrendingUp } from "lucide-react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="service-icon" />,
      title: "Direito Trabalhista",
      description: "Ações de rescisão contratual, horas extras, danos morais e assédio no ambiente de trabalho.",
    },
    {
      icon: <Users className="service-icon" />,
      title: "Aposentadoria",
      description: "Planejamento e solicitação de aposentadorias por tempo de contribuição, idade e especial.",
    },
    {
      icon: <Heart className="service-icon" />,
      title: "Benefícios do INSS",
      description: "Auxílio-doença, pensão por morte, salário-maternidade e outros benefícios previdenciários.",
    },
    {
      icon: <FileText className="service-icon" />,
      title: "Revisão de Benefícios",
      description: "Análise e revisão de benefícios já concedidos para aumentar o valor recebido.",
    },
    {
      icon: <Scale className="service-icon" />,
      title: "Ações Judiciais",
      description: "Representação em processos trabalhistas e previdenciários com foco em resultados.",
    },
    {
      icon: <TrendingUp className="service-icon" />,
      title: "Consultoria Preventiva",
      description: "Análise de documentação e orientação para evitar problemas futuros.",
    },
  ];

  return (
    <section id="servicos" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Soluções jurídicas completas para proteger seus direitos</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card-content">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
