import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import "./Blog.css";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Direitos do Trabalhador na Rescisão de Contrato",
      excerpt: "Entenda quais são seus direitos ao ser demitido e como garantir o recebimento de todas as verbas rescisórias.",
      date: "2025-03-15",
      category: "Direito Trabalhista",
      slug: "direitos-trabalhador-rescisao",
    },
    {
      id: 2,
      title: "Como Solicitar sua Aposentadoria por Tempo de Contribuição",
      excerpt: "Passo a passo completo para solicitar sua aposentadoria por tempo de contribuição junto ao INSS.",
      date: "2025-03-10",
      category: "Direito Previdenciário",
      slug: "aposentadoria-tempo-contribuicao",
    },
    {
      id: 3,
      title: "Revisão de Benefício: Quando e Como Fazer",
      excerpt: "Saiba quando vale a pena revisar seu benefício previdenciário e quais são os documentos necessários.",
      date: "2025-03-05",
      category: "Direito Previdenciário",
      slug: "revisao-beneficio-inss",
    },
  ];

  return (
    <div className="blog-page">
      <Header />
      <WhatsAppButton />
      
      <main className="blog-main">
        <section className="blog-hero">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">Blog Jurídico</h1>
            <p className="blog-hero-subtitle">
              Informações e orientações sobre direitos trabalhistas e previdenciários
            </p>
          </div>
        </section>

        <section className="blog-posts-section">
          <div className="blog-posts-container">
            <div className="blog-posts-grid">
              {posts.map((post, index) => (
                <article key={post.id} className="blog-post-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="blog-post-header">
                    <div className="blog-post-meta">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      <span className="blog-post-category">{post.category}</span>
                    </div>
                    <h2 className="blog-post-title">{post.title}</h2>
                  </div>
                  <div className="blog-post-content">
                    <p className="blog-post-excerpt">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="blog-post-link">
                      Ler mais
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
