# LinkedIn Professional - Plataforma de Conexão Profissional

Uma aplicação web moderna e responsiva inspirada no LinkedIn, focada no futuro do trabalho, conectando pessoas e explorando competências técnicas e comportamentais.

## 📋 Sobre o Projeto

Esta é uma Single Page Application (SPA) desenvolvida com React e Vite, que simula uma plataforma profissional para conectar profissionais. A aplicação exibe uma listagem de 60 profissionais fictícios com informações completas, permitindo busca, filtros e visualização detalhada de perfis.

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 5.0.8** - Build tool e dev server
- **Tailwind CSS 3.4.0** - Framework CSS utilitário
- **HTML5** - Estrutura da aplicação
- **JavaScript (ES6+)** - Linguagem de programação

## ✨ Funcionalidades

- ✅ Listagem de 60 profissionais fictícios completos
- ✅ Cards de profissionais com foto, nome, cargo e principais skills
- ✅ Modal de perfil completo com todas as informações
- ✅ Sistema de busca por nome
- ✅ Filtros por área de atuação, cidade e tecnologia
- ✅ Dark Mode completo com toggle e persistência (localStorage)
- ✅ Modal de mensagem com formulário funcional
- ✅ Botão "Recomendar profissional" com alerta
- ✅ Design moderno, responsivo e elegante
- ✅ Animações suaves e transições
- ✅ Grid fluido e layout adaptativo

## 📦 Estrutura de Dados

Cada profissional possui:
- ID único
- Nome, foto (gerada via DiceBear API), gênero, email e cidade
- Cargo, descrição e resumo profissional
- Localização e área de atuação
- Habilidades técnicas (hard skills)
- Soft skills
- Experiências profissionais (empresa, cargo, datas, descrição)
- Formação acadêmica (curso, instituição, ano)
- Projetos (título, link, descrição)
- Certificações relevantes
- Idiomas com níveis
- Áreas de interesse

## 🛠️ Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório ou navegue até o diretório do projeto**

```bash
cd Gd_WebFront_Linkdin
```

2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Acesse a aplicação**

Abra seu navegador e acesse: `http://localhost:5173`

### Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

Para visualizar a build de produção:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
Gd_WebFront_Linkdin/
├── src/
│   ├── components/
│   │   ├── CartaoPessoa.jsx          # Card de profissional
│   │   ├── ModalPerfil.jsx           # Modal de perfil completo
│   │   ├── ModalMensagem.jsx         # Modal de mensagem
│   │   ├── BarraBusca.jsx            # Barra de busca
│   │   ├── Filtros.jsx               # Componente de filtros
│   │   └── ToggleModoEscuro.jsx     # Toggle de dark mode
│   ├── data/
│   │   └── profissionais.json        # Dados dos 60 profissionais
│   ├── App.jsx                        # Componente principal
│   ├── main.jsx                       # Entry point
│   └── index.css                     # Estilos globais (Tailwind)
├── index.html                         # HTML principal
├── package.json                       # Dependências do projeto
├── vite.config.js                    # Configuração do Vite
├── tailwind.config.js                # Configuração do Tailwind
├── postcss.config.js                 # Configuração do PostCSS
└── README.md                          # Este arquivo
```

## 🎨 Componentes

### CartaoPessoa
Exibe um card com informações resumidas do profissional (foto circular, nome, cargo, localização e principais skills). Ao clicar no card, abre o modal de perfil completo.

### ModalPerfil
Modal completo que exibe todas as informações do profissional, incluindo:
- Dados pessoais e profissionais (nome, cargo, email, cidade, gênero, descrição)
- Habilidades técnicas e soft skills
- Experiências profissionais detalhadas
- Formação acadêmica
- Projetos com links
- Certificações
- Idiomas com níveis
- Áreas de interesse
- Botões de ação (Recomendar e Enviar Mensagem)

### ModalMensagem
Modal com formulário para envio de mensagem ao profissional, incluindo campos para assunto e mensagem.

### BarraBusca
Barra de busca para filtrar profissionais por nome, com busca case-insensitive em tempo real.

### Filtros
Componente de filtros com três opções dinâmicas:
- Área de atuação (extraída automaticamente dos dados)
- Cidade (extraída automaticamente dos dados)
- Tecnologia (extraída das habilidades técnicas)

### ToggleModoEscuro
Botão flutuante no canto superior direito para alternar entre modo claro e escuro, com persistência no localStorage e animações suaves.

## 🌙 Dark Mode

O Dark Mode está totalmente implementado com:
- Toggle flutuante no canto superior direito
- Persistência da preferência no localStorage
- Transições suaves entre temas
- Suporte completo em todos os componentes

## 🔍 Sistema de Busca e Filtros

A aplicação possui um sistema completo de busca e filtros:
- **Busca**: Filtra profissionais por nome (case-insensitive)
- **Filtros**: 
  - Por área de atuação
  - Por cidade/localização
  - Por tecnologia/habilidade técnica
- Os filtros podem ser combinados
- Contador de resultados exibido dinamicamente

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a diferentes tamanhos de tela:
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3-4 colunas
- Grid fluido e adaptativo

## 🎯 Funcionalidades dos Botões

### Recomendar Profissional
Ao clicar no botão "Recomendar profissional" no modal de perfil, um alerta é exibido confirmando a recomendação.

### Enviar Mensagem
Ao clicar no botão "Enviar mensagem", um modal com formulário é aberto, permitindo:
- Inserir assunto da mensagem
- Escrever a mensagem
- Enviar (exibe alerta com os dados)
- Cancelar

## 🔗 Links

- **Repositório**: [Adicione o link do repositório GitHub aqui]
- **Deploy**: [Adicione o link do deploy aqui quando disponível]

## 👥 Integrantes do Grupo

*Por favor, atualize esta seção com os nomes e RMs reais dos integrantes do grupo.*

- **Nome do Integrante 1** - RM: [RM]
- **Nome do Integrante 2** - RM: [RM]
- **Nome do Integrante 3** - RM: [RM]

## 🎯 Usuários e Senhas

Esta aplicação não possui sistema de autenticação, sendo uma SPA pública que pode ser acessada por qualquer usuário sem necessidade de login.

## 📝 Notas Adicionais

- Todos os dados são fictícios e servem apenas para demonstração
- As fotos dos profissionais são geradas usando a API DiceBear (https://api.dicebear.com/7.x/avataaars/svg?seed=NomeDaPessoa)
- Os links de projetos são exemplos e não são funcionais
- A aplicação não possui backend, sendo uma SPA pura
- Todos os componentes e variáveis estão nomeados em português
- O projeto utiliza Tailwind CSS com uma paleta de cores personalizada (azul escuro, azul claro, branco e cinza suave)

## 🐛 Troubleshooting

### Problemas Comuns

**Erro ao instalar dependências:**
```bash
# Limpe o cache do npm e tente novamente
npm cache clean --force
npm install
```

**Erro ao iniciar o servidor:**
- Verifique se a porta 5173 está disponível
- Tente usar uma porta diferente modificando `vite.config.js`

**Dark Mode não persiste:**
- Verifique se o localStorage está habilitado no navegador
- Limpe o cache do navegador e tente novamente

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

**Desenvolvido com ❤️ usando React, Vite e Tailwind CSS**

