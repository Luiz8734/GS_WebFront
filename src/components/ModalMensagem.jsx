import React, { useState } from 'react';

/**
 * Componente ModalMensagem - Modal para enviar mensagem a uma pessoa
 * @param {Object} pessoa - Objeto contendo dados da pessoa
 * @param {boolean} aberto - Indica se o modal está aberto
 * @param {Function} aoFechar - Função para fechar o modal
 */
const ModalMensagem = ({ pessoa, aberto, aoFechar }) => {
  const [dadosFormulario, setDadosFormulario] = useState({
    assunto: '',
    mensagem: ''
  });

  if (!aberto || !pessoa) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada para ${pessoa.nome}!\n\nAssunto: ${dadosFormulario.assunto}\nMensagem: ${dadosFormulario.mensagem}`);
    setDadosFormulario({ assunto: '', mensagem: '' });
    aoFechar();
  };

  const handleChange = (e) => {
    setDadosFormulario({
      ...dadosFormulario,
      [e.target.name]: e.target.value
    });
  };

  return (
    <dialog
      open={aberto}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
      onClick={aoFechar}
      aria-modal="true"
      aria-labelledby="modal-mensagem-titulo"
    >
      <article
        className="bg-white dark:bg-azul-escuro rounded-2xl shadow-2xl max-w-2xl w-full animate-scale-in border-2 border-azul-claro dark:border-azul-medio"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-6 border-b-2 border-azul-claro dark:border-azul-medio flex justify-between items-center bg-gradient-azul dark:bg-azul-medio rounded-t-2xl">
          <h2 id="modal-mensagem-titulo" className="text-2xl font-bold text-white">
            Enviar Mensagem para {pessoa.nome}
          </h2>
          <button
            onClick={aoFechar}
            className="text-white hover:text-cinza-suave text-3xl font-bold transition-colors duration-200 hover:scale-110"
            aria-label="Fechar modal"
          >
            ×
          </button>
        </header>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="assunto" className="block text-sm font-bold text-azul-escuro dark:text-azul-suave mb-2">
              Assunto
            </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={dadosFormulario.assunto}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-cinza-suave dark:border-azul-medio rounded-xl focus:ring-2 focus:ring-azul-claro focus:border-azul-claro dark:bg-azul-escuro dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Digite o assunto da mensagem"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-bold text-azul-escuro dark:text-azul-suave mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={dadosFormulario.mensagem}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border-2 border-cinza-suave dark:border-azul-medio rounded-xl focus:ring-2 focus:ring-azul-claro focus:border-azul-claro dark:bg-azul-escuro dark:text-white transition-all duration-300 shadow-sm hover:shadow-md resize-none"
              placeholder="Digite sua mensagem aqui..."
            />
          </div>

          <footer className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={aoFechar}
              className="flex-1 bg-cinza-suave hover:bg-cinza-medio dark:bg-azul-medio dark:hover:bg-azul-claro text-azul-escuro dark:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-azul-claro hover:bg-azul-escuro text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Enviar Mensagem
            </button>
          </footer>
        </form>
      </article>
    </dialog>
  );
};

export default ModalMensagem;

