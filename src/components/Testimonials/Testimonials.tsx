import { Star } from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Aposentada",
      content: "Excelente atendimento! Consegui minha aposentadoria em tempo recorde graças ao profissionalismo da equipe. Recomendo muito!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Trabalhador",
      content: "Tive um problema trabalhista complexo e eles resolveram com maestria. Atenção aos detalhes e comprometimento impressionantes.",
      rating: 5,
    },
    {
      name: "Ana Oliveira",
      role: "Servidora Pública",
      content: "Profissionais extremamente competentes. Me ajudaram a revisar meu benefício e consegui um aumento significativo. Gratidão!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="testimonials-subtitle">
            A satisfação de nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="testimonial-star" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
