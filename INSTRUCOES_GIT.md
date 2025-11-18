# 📝 Instruções para Commits Git

## ⚠️ Importante

O repositório Git precisa ser inicializado no diretório do projeto. Siga os passos abaixo para criar os commits necessários.

## 🚀 Passos para Criar os Commits

### 1. Abrir o Terminal no Diretório do Projeto

Navegue até o diretório do projeto:
```bash
cd "C:\Users\luizm\OneDrive\Área de Trabalho\Gd_WebFront_Linkdin"
```

### 2. Inicializar o Repositório Git (se ainda não foi feito)

```bash
git init
```

### 3. Criar um arquivo .gitignore (se não existir)

Crie um arquivo `.gitignore` na raiz do projeto com o seguinte conteúdo:

```
# Dependências
node_modules/
package-lock.json

# Build
dist/
build/

# Ambiente
.env
.env.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### 4. Adicionar Arquivos e Criar Commits

Execute os seguintes comandos na ordem:

```bash
# Commit 1: Estrutura inicial
git add package.json vite.config.js tailwind.config.js postcss.config.js index.html
git commit -m "feat: estrutura inicial do projeto React com Vite e Tailwind CSS"

# Commit 2: Configuração base
git add src/main.jsx src/index.css src/App.jsx
git commit -m "feat: configuração base da aplicação e estilos globais"

# Commit 3: Componentes base
git add src/components/BarraBusca.jsx src/components/Filtros.jsx src/components/ToggleModoEscuro.jsx
git commit -m "feat: criação dos componentes base (BarraBusca, Filtros, ToggleModoEscuro)"

# Commit 4: Componente de card
git add src/components/CartaoPessoa.jsx
git commit -m "feat: implementação do componente CartaoPessoa com design sofisticado"

# Commit 5: Modal de perfil
git add src/components/ModalPerfil.jsx
git commit -m "feat: implementação do modal de perfil completo com todas as informações"

# Commit 6: Modal de mensagem
git add src/components/ModalMensagem.jsx
git commit -m "feat: implementação do modal de mensagem com formulário funcional"

# Commit 7: Sistema de busca e filtros
git add src/App.jsx
git commit -m "feat: sistema completo de busca por nome e filtros dinâmicos (área, cidade, tecnologia)"

# Commit 8: Dark Mode
git add src/components/ToggleModoEscuro.jsx src/App.jsx
git commit -m "feat: implementação do Dark Mode com toggle e persistência no localStorage"

# Commit 9: Dados dos profissionais
git add src/data/profissionais.json
git commit -m "feat: adição de 60 profissionais completos com todos os campos necessários"

# Commit 10: Refinamento do design
git add src/components/CartaoPessoa.jsx src/components/ModalPerfil.jsx src/components/ModalMensagem.jsx src/App.jsx
git commit -m "refactor: remoção de ícones desnecessários e refinamento do design para visual limpo e profissional"

# Commit 11: Documentação
git add README.md CHECKLIST_PROJETO.md
git commit -m "docs: documentação completa do projeto com README e checklist"
```

### 5. Verificar os Commits

```bash
git log --oneline
```

Você deve ver pelo menos 11 commits listados.

## 📊 Estrutura de Commits Sugerida

1. ✅ Estrutura inicial do projeto
2. ✅ Configuração base
3. ✅ Componentes base
4. ✅ Componente de card
5. ✅ Modal de perfil
6. ✅ Modal de mensagem
7. ✅ Sistema de busca e filtros
8. ✅ Dark Mode
9. ✅ Dados dos profissionais
10. ✅ Refinamento do design
11. ✅ Documentação

## 🔗 Conectar com Repositório Remoto (Opcional)

Se você quiser conectar com um repositório no GitHub:

```bash
# Adicionar repositório remoto
git remote add origin https://github.com/seu-usuario/seu-repositorio.git

# Enviar commits
git branch -M main
git push -u origin main
```

## ✅ Verificação Final

Após criar os commits, verifique:

- [ ] Pelo menos 10 commits criados
- [ ] Cada commit tem uma mensagem descritiva
- [ ] Todos os arquivos importantes estão commitados
- [ ] O histórico está organizado e lógico

---

**Nota**: Se preferir, você pode criar commits menores e mais granulares, ou agrupar funcionalidades relacionadas. O importante é ter pelo menos 10 commits relevantes que mostrem o desenvolvimento progressivo do projeto.

