# 🌐 **LinkedIn Professional --- Plataforma de Conexão Profissional**

Uma aplicação web moderna e responsiva inspirada no LinkedIn, focada no
futuro do trabalho e na conexão entre profissionais. A plataforma simula
uma rede profissional completa, permitindo busca, filtros, visualização
de perfis detalhados e interação com profissionais fictícios.

## 📋 **Sobre o Projeto**

O **LinkedIn Professional** é uma **Single Page Application (SPA)**
desenvolvida com **React + Vite**, apresentando uma listagem de **60
profissionais fictícios** com dados completos, fotos, habilidades e
histórico profissional.\
A aplicação oferece busca, filtros dinâmicos, dark mode persistente e
modais interativos.

## 👥 **Integrantes do Grupo**

|     RM | Nome                |
| -----: | ------------------- |
| 562142 | Luiz Antonio Morais |
| 561997 | Nicolas Barnabe     |

## 🔗 **Links**

-   Repositório: *[https://github.com/Luiz8734/GS_WebFront.git]*\
-   Deploy: *[https://gs-web-front-akc4lknnk-luizs-projects-af0b9de9.vercel.app/]*
-   

## 🚀 **Tecnologias Utilizadas**

-   **React 18.2.0**
-   **Vite 5.0.8**
-   **Tailwind CSS 3.4.0**
-   **HTML5**
-   **JavaScript ES6+**

## ✨ **Funcionalidades**

-   ✔️ Listagem de 60 profissionais fictícios\
-   ✔️ Cards com foto, nome, cargo e skills principais\
-   ✔️ Modal de perfil completo\
-   ✔️ Sistema de busca por nome (dinâmico)\
-   ✔️ Filtros por **área**, **cidade** e **tecnologia**\
-   ✔️ Dark Mode com **persistência (localStorage)**\
-   ✔️ Modal de envio de mensagem\
-   ✔️ Botão "Recomendar profissional"\
-   ✔️ Layout moderno, responsivo e elegante\
-   ✔️ Animações suaves e transições\
-   ✔️ Grid fluido e adaptativo

## 📦 **Estrutura de Dados dos Profissionais**

Cada profissional contém:

-   ID único\
-   Nome, foto (via API DiceBear), gênero, email\
-   Cargo e resumo profissional\
-   Cidade e área de atuação\
-   **Hard skills**\
-   **Soft skills**\
-   Experiências profissionais\
-   Formação acadêmica\
-   Projetos\
-   Certificações\
-   Idiomas\
-   Áreas de interesse

## 🛠️ **Instalação**

### ✔ Pré-requisitos

-   Node.js 16+
-   npm ou yarn

### ✔ Passos

1.  Entre no diretório do projeto:

    ``` bash
    cd Gd_WebFront_Linkdin
    ```

2.  Instale as dependências:

    ``` bash
    npm install
    ```

3.  Inicie o servidor:

    ``` bash
    npm run dev
    ```

4.  Acesse:

        http://localhost:5173

## 📦 **Build para Produção**

``` bash
npm run build
```

Pré-visualização da build:

``` bash
npm run preview
```

## 📁 **Estrutura do Projeto**

    Gd_WebFront_Linkdin/
    ├── src/
    │   ├── components/
    │   ├── data/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    └── README.md

## 🎨 **Componentes**

Descrição detalhada dos componentes como: CartaoPessoa, ModalPerfil,
ModalMensagem, BarraBusca, Filtros e ToggleModoEscuro.

## 🌙 **Dark Mode**

Persistência no localStorage, transições suaves e suporte completo a
todos os componentes.

## 🔍 **Busca + Filtros Avançados**

Combinação dinâmica de filtros com contador de resultados.

## 📱 **Responsividade**

Grid adaptativo: - Mobile: 1 coluna\
- Tablet: 2 colunas\
- Desktop: 3--4 colunas

## 🎯 **Ações Disponíveis**

### ⭐ Recomendar

Exibe um alerta confirmando a recomendação.

### ✉️ Enviar Mensagem

Abre modal com formulário.




## 📝 **Notas Adicionais**

-   Dados fictícios\
-   Imagens via DiceBear\
-   SPA sem backend\
-   Paleta moderna (azul escuro, azul claro, branco, cinza)

## 🐛 **Troubleshooting**

### ❗ Erro ao instalar dependências

``` bash
npm cache clean --force
npm install
```

### ❗ Erro ao iniciar servidor

Verifique porta 5173 ou altere no vite.config.js.

### ❗ Dark Mode não persiste

Verifique localStorage ou limpe cache

## 💙 Desenvolvido com React, Vite e Tailwind
