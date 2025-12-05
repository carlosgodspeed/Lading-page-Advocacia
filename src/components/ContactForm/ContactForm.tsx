import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import "./ContactForm.css";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone inválido"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000, "Mensagem muito longa"),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = contactSchema.parse(formData);
      setIsSubmitting(true);

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          toast.error(err.message);
        });
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-subtitle">
            Estamos prontos para defender seus direitos. Agende uma consulta hoje mesmo.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-content">
              <h3 className="contact-info-title">Informações de Contato</h3>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <Phone className="contact-info-icon" />
                  <div>
                    <p className="contact-info-label">Telefone</p>
                    <p className="contact-info-value">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <Mail className="contact-info-icon" />
                  <div>
                    <p className="contact-info-label">E-mail</p>
                    <p className="contact-info-value">supremajuridica@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <MapPin className="contact-info-icon" />
                  <div>
                    <p className="contact-info-label">Endereço</p>
                    <p className="contact-info-value">
                      Av. Paulista,São Paulo - SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-schedule">
              <h4 className="contact-schedule-title">Horário de Atendimento</h4>
              <div className="contact-schedule-content">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p className="contact-schedule-note">
                  *Atendimentos fora do horário comercial podem ser agendados
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nome Completo *</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                maxLength={100}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                maxLength={255}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Telefone *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                required
                maxLength={20}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva brevemente seu caso..."
                rows={5}
                required
                maxLength={1000}
                className="form-textarea"
              />
            </div>

            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
