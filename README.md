# Suprema Jurídica – Landing Page (React + TypeScript + Vite)

A Suprema Jurídica é uma landing page desenvolvida para prática de front-end utilizando React, TypeScript, JavaScript e CSS puro, construída com Vite.
O projeto simula uma página institucional de advocacia com foco em design limpo, organização e responsividade.

 ## 📸 Prévia do Layout (Screenshots)

<img src="https://github.com/user-attachments/assets/0c2ffc6b-ddda-447d-94a0-bc7492501e1d" width="500" />

<img src="https://github.com/user-attachments/assets/04210ee7-3bd6-4124-9d24-b859554b259b" width="500" />

<img src="https://github.com/user-attachments/assets/481fe475-6a68-4985-a1db-b1d1f049587b" width="500" />

<img src="https://github.com/user-attachments/assets/df2cdd3b-5fac-4484-8e7d-f6e4bd890408" width="500" />

<img src="https://github.com/user-attachments/assets/f6362ff7-b24a-4791-82da-4542fd4f4503" width="500" />

<img src="https://github.com/user-attachments/assets/fd60e00f-74d9-4404-8a56-6efa550b6ebe" width="500" />

 ## 🧩 Funcionalidades do Projeto
Componentização completa com React <br>
Estilização com CSS puro <br>
Build e desenvolvimento com Vite <br>
Layout responsivo (desktop, tablet, mobile) <br>
Cards de serviços e diferenciais <br>
Estrutura organizada <br>

## 🛠️ Tecnologias Utilizadas
React.js <br>
TypeScript <br>
JavaScript <br>
CSS3 <br>
Vite <br>

 ### 📂 Estrutura do Projeto
├── .gitignore <br>
├── README.md <br>
├── bun.lockb <br>
├── components.json <br>
├── eslint.config.js <br>
├── index.html <br>
├── package.json <br>
├── postcss.config.js <br>
├── public <br>
│   ├── favicon.ico <br>
│   ├── placeholder.svg <br>
│   └── robots.txt <br>
├── src <br>
│   ├── App.css <br>
│   ├── App.tsx <br>
│   ├── assets <br>
│   │   ├── about-section.jpg<br>
│   │   └── hero-legal.jpg<br>
│   ├── components<br>
│   │   ├── About<br>
│   │   │   ├── About.css <br>
│   │   │   └── About.tsx <br>
│   │   ├── ContactForm <br>
│   │   │   ├── ContactForm.css <br>
│   │   │   └── ContactForm.tsx <br>
│   │   ├── Footer<br>
│   │   │   ├── Footer.css <br>
│   │   │   └── Footer.tsx <br>
│   │   ├── Header <br>
│   │   │   ├── Header.css <br>
│   │   │   └── Header.tsx <br>
│   │   ├── Hero <br>
│   │   │   ├── Hero.css <br>
│   │   │   └── Hero.tsx <br>
│   │   ├── NavLink.tsx <br>
│   │   ├── Services <br>
│   │   │   ├── Services.css <br>
│   │   │   └── Services.tsx <br>
│   │   ├── Testimonials <br>
│   │   │   ├── Testimonials.css <br>
│   │   │   └── Testimonials.tsx <br>
│   │   ├── WhatsAppButton <br>
│   │   │   ├── WhatsAppButton.css <br>
│   │   │   └── WhatsAppButton.tsx <br>
│   │   └── ui <br>
│   │       ├── accordion.tsx <br>
│   │       ├── alert-dialog.tsx <br>
│   │       ├── alert.tsx <br>
│   │       ├── aspect-ratio.tsx <br>
│   │       ├── avatar.tsx <br>
│   │       ├── badge.tsx <br>
│   │       ├── breadcrumb.tsx <br>
│   │       ├── button.tsx <br>
│   │       ├── calendar.tsx <br>
│   │       ├── card.tsx <br>
│   │       ├── carousel.tsx <br>
│   │       ├── chart.tsx <br>
│   │       ├── checkbox.tsx <br>
│   │       ├── collapsible.tsx <br>
│   │       ├── command.tsx <br>
│   │       ├── context-menu.tsx <br>
│   │       ├── dialog.tsx <br>
│   │       ├── drawer.tsx <br>
│   │       ├── dropdown-menu.tsx <br>
│   │       ├── form.tsx <br>
│   │       ├── hover-card.tsx <br>
│   │       ├── input-otp.tsx <br>
│   │       ├── input.tsx <br>
│   │       ├── label.tsx <br>
│   │       ├── menubar.tsx <br>
│   │       ├── navigation-menu.tsx <br>
│   │       ├── pagination.tsx <br>
│   │       ├── popover.tsx <br>
│   │       ├── progress.tsx <br>
│   │       ├── radio-group.tsx <br>
│   │       ├── resizable.tsx <br>
│   │       ├── scroll-area.tsx <br>
│   │       ├── select.tsx <br>
│   │       ├── separator.tsx <br>
│   │       ├── sheet.tsx <br>
│   │       ├── sidebar.tsx <br>
│   │       ├── skeleton.tsx <br>
│   │       ├── slider.tsx <br>
│   │       ├── sonner.tsx <br>
│   │       ├── switch.tsx <br>
│   │       ├── table.tsx <br>
│   │       ├── tabs.tsx <br>
│   │       ├── textarea.tsx <br>
│   │       ├── toast.tsx <br>
│   │       ├── toaster.tsx <br>
│   │       ├── toggle-group.tsx <br>
│   │       ├── toggle.tsx <br>
│   │       ├── tooltip.tsx <br>
│   │       └── use-toast.ts <br>
│   ├── hooks <br>
│   │   ├── use-mobile.tsx <br>
│   │   └── use-toast.ts <br>
│   ├── index.css <br>
│   ├── lib <br>
│   │   └── utils.ts <br>
│   ├── main.tsx <br>
│   ├── pages <br>
│   │   ├── Blog <br>
│   │   │   ├── Blog.css <br>
│   │   │   └── Blog.tsx <br>
│   │   ├── BlogPost <br>
│   │   │   ├── BlogPost.css <br>
│   │   │   └── BlogPost.tsx <br>
│   │   ├── Index <br>
│   │   │   ├── Index.css <br>
│   │   │   └── Index.tsx <br>
│   │   └── NotFound.tsx <br>
│   └── vite-env.d.ts <br>
├── tailwind.config.ts <br>
├── tsconfig.app.json <br>
├── tsconfig.json <br>
├── tsconfig.node.json <br>
└── vite.config.ts <br>


 ### ▶️ Como Executar
git clone https://github.com/seuusuario/suprema-juridica.git <br>
cd suprema-juridica <br>
npm install <br>
npm run dev <br>
