import React, { useState, useEffect, useMemo } from 'react';
import pessoasData from './data/profissionais.json';
import CartaoPessoa from './components/CartaoPessoa';
import ModalPerfil from './components/ModalPerfil';
import ModalMensagem from './components/ModalMensagem';
import BarraBusca from './components/BarraBusca';
import Filtros from './components/Filtros ';
import ToggleModoEscuro from './components/ToggleModoEscur';

/**
 * Componente principal da aplicação
 * Gerencia o estado global, filtros, busca e modais
 */
function App() {
  // Estado das pessoas carregadas do JSON
  const [pessoas] = useState(pessoasData);
  
  // Estado da busca por nome
  const [termoBusca, setTermoBusca] = useState('');
  
  // Estado dos filtros (área, cidade, tecnologia)
  const [filtros, setFiltros] = useState({
    area: '',
    cidade: '',
    tecnologia: ''
  });
  
  // Estado da pessoa selecionada para exibir no modal
  const [pessoaSelecionada, setPessoaSelecionada] = useState(null);
  
  // Estado dos modais
  const [modalPerfilAberto, setModalPerfilAberto] = useState(false);
  const [modalMensagemAberto, setModalMensagemAberto] = useState(false);
  
  // Estado do modo escuro (persistido no localStorage)
  const [modoEscuro, setModoEscuro] = useState(() => {
    const salvo = localStorage.getItem('modoEscuro');
    return salvo ? JSON.parse(salvo) : false;
  });

  // Aplicar modo escuro ao documento
  useEffect(() => {
    if (modoEscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('modoEscuro', JSON.stringify(modoEscuro));
  }, [modoEscuro]);

  // Filtrar pessoas baseado na busca e filtros
  const pessoasFiltradas = useMemo(() => {
    return pessoas.filter((pessoa) => {
      // Filtro por nome (busca case-insensitive)
      const correspondeBusca = pessoa.nome
        .toLowerCase()
        .includes(termoBusca.toLowerCase());

      // Filtro por área
      const correspondeArea = !filtros.area || pessoa.areaAtuacao === filtros.area;

      // Filtro por cidade
      const correspondeCidade = !filtros.cidade || pessoa.localizacao === filtros.cidade;

      // Filtro por tecnologia
      const correspondeTecnologia =
        !filtros.tecnologia ||
        pessoa.habilidadesTecnicas.includes(filtros.tecnologia);

      return correspondeBusca && correspondeArea && correspondeCidade && correspondeTecnologia;
    });
  }, [pessoas, termoBusca, filtros]);

  // Handler para clicar no card de pessoa
  const handleCardClick = (pessoa) => {
    setPessoaSelecionada(pessoa);
    setModalPerfilAberto(true);
  };

  // Handler para recomendar pessoa
  const handleRecomendar = () => {
    alert(`Você recomendou ${pessoaSelecionada.nome}! 🎉`);
  };

  // Handler para enviar mensagem
  const handleEnviarMensagem = () => {
    setModalPerfilAberto(false);
    setModalMensagemAberto(true);
  };

  // Handler para alterar filtros
  const handleAlterarFiltro = (chave, valor) => {
    setFiltros((prev) => ({
      ...prev,
      [chave]: valor
    }));
  };

  // Handler para alternar modo escuro
  const toggleModoEscuro = () => {
    setModoEscuro((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-suave dark:bg-azul-escuro transition-colors duration-300">
      <ToggleModoEscuro modoEscuro={modoEscuro} aoAlternar={toggleModoEscuro} />

      {/* Cabeçalho principal */}
      <header className="bg-white dark:bg-azul-escuro shadow-xl border-b-4 border-azul-claro dark:border-azul-medio sticky top-0 z-40">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold text-azul-escuro dark:text-white text-center mb-3 bg-gradient-to-r from-azul-escuro to-azul-claro bg-clip-text text-transparent animate-slide-down">
            Rede Profissional
          </h1>
          <p className="text-center text-azul-medio dark:text-azul-suave text-lg font-medium">
            Conectando profissionais e explorando competências técnicas e comportamentais
          </p>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Seção de busca e filtros */}
        <section className="mb-8">
          <BarraBusca termoBusca={termoBusca} aoAlterarBusca={setTermoBusca} />
          <Filtros
            filtros={filtros}
            aoAlterarFiltro={handleAlterarFiltro}
            pessoas={pessoas}
          />
        </section>

        {/* Contador de resultados */}
        <section className="mb-6 animate-fade-in">
          <p className="text-azul-medio dark:text-azul-suave text-lg font-semibold">
            Mostrando <span className="font-bold text-azul-escuro dark:text-white text-xl">
              {pessoasFiltradas.length}
            </span> de <span className="font-bold text-azul-escuro dark:text-white text-xl">
              {pessoas.length}
            </span> profissionais
          </p>
        </section>

        {/* Grid de pessoas */}
        {pessoasFiltradas.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pessoasFiltradas.map((pessoa, index) => (
              <div
                key={pessoa.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CartaoPessoa
                  pessoa={pessoa}
                  onClick={handleCardClick}
                />
              </div>
            ))}
          </section>
        ) : (
          <section className="text-center py-16 animate-fade-in">
            <div className="bg-white dark:bg-azul-escuro rounded-2xl p-8 shadow-xl border-2 border-azul-claro dark:border-azul-medio">
              <p className="text-2xl text-azul-escuro dark:text-white font-bold mb-2">
                Nenhum profissional encontrado
              </p>
              <p className="text-azul-medio dark:text-azul-suave">
                Tente ajustar os filtros ou o termo de busca
              </p>
            </div>
          </section>
        )}
      </main>

      {/* Rodapé */}
      <footer className="bg-white dark:bg-azul-escuro border-t-4 border-azul-claro dark:border-azul-medio mt-16 shadow-xl">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-azul-medio dark:text-azul-suave font-medium">
            © 2025 Rede Profissional - Plataforma de Conexão Profissional
          </p>
        </div>
      </footer>

      {/* Modais */}
      <ModalPerfil
        pessoa={pessoaSelecionada}
        aberto={modalPerfilAberto}
        aoFechar={() => setModalPerfilAberto(false)}
        aoRecomendar={handleRecomendar}
        aoEnviarMensagem={handleEnviarMensagem}
      />

      <ModalMensagem
        pessoa={pessoaSelecionada}
        aberto={modalMensagemAberto}
        aoFechar={() => setModalMensagemAberto(false)}
      />
    </div>
  );
}

export default App;
