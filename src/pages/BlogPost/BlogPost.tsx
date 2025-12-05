import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();

  const post = {
    title: "Direitos do Trabalhador na Rescisão de Contrato",
    date: "2025-03-15",
    category: "Direito Trabalhista",
    content: `
      <h2>Introdução</h2>
      <p>A rescisão do contrato de trabalho é um momento delicado que exige atenção especial aos direitos do trabalhador. Neste artigo, abordaremos os principais pontos que você precisa conhecer para garantir o recebimento correto de todas as verbas rescisórias.</p>

      <h2>Tipos de Rescisão</h2>
      <p>Existem diferentes tipos de rescisão contratual, cada uma com suas particularidades:</p>
      
      <h3>1. Demissão sem Justa Causa</h3>
      <p>Quando o empregador decide encerrar o contrato sem que o trabalhador tenha cometido falta grave. Neste caso, o trabalhador tem direito a:</p>
      <ul>
        <li>Saldo de salário</li>
        <li>Aviso prévio (trabalhado ou indenizado)</li>
        <li>13º salário proporcional</li>
        <li>Férias vencidas e proporcionais + 1/3</li>
        <li>Multa de 40% do FGTS</li>
        <li>Saque do FGTS</li>
        <li>Seguro-desemprego</li>
      </ul>

      <h2>Prazos para Pagamento</h2>
      <p>O empregador tem prazos específicos para efetuar o pagamento das verbas rescisórias:</p>
      <ul>
        <li>Até 10 dias corridos após o término do contrato, quando há aviso prévio trabalhado</li>
        <li>No dia seguinte ao término do contrato, quando há dispensa do cumprimento do aviso prévio</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Conhecer seus direitos é fundamental para garantir uma rescisão justa. Sempre mantenha a documentação organizada e, em caso de dúvidas, busque orientação especializada.</p>
    `,
  };

  return (
    <div className="blogpost-page">
      <Header />
      <WhatsAppButton />
      
      <main className="blogpost-main">
        <section className="blogpost-hero">
          <div className="blogpost-hero-content">
            <Link to="/blog" className="blogpost-back-link">
              <ArrowLeft size={16} />
              Voltar ao Blog
            </Link>
            <div className="blogpost-hero-text">
              <span className="blogpost-category">{post.category}</span>
              <h1 className="blogpost-title">{post.title}</h1>
              <div className="blogpost-meta">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
          </div>
        </section>

        <article className="blogpost-article">
          <div className="blogpost-container">
            <div 
              className="blogpost-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="blogpost-cta">
              <h3 className="blogpost-cta-title">Precisa de Ajuda Jurídica?</h3>
              <p className="blogpost-cta-text">
                Nossa equipe está pronta para defender seus direitos. Entre em contato e agende uma consulta.
              </p>
              <Link to="/#contato" className="blogpost-cta-button">
                Agendar Consulta
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
