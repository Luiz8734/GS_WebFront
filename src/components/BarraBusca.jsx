import React from 'react';

/**
 * Componente BarraBusca - Barra de busca para filtrar pessoas por nome
 * @param {string} termoBusca - Termo de busca atual
 * @param {Function} aoAlterarBusca - Função chamada quando o termo de busca muda
 */
const BarraBusca = ({ termoBusca, aoAlterarBusca }) => {
  return (
    <section className="relative mb-6 animate-slide-down">
      <div className="relative">
        <input
          type="search"
          value={termoBusca}
          onChange={(e) => aoAlterarBusca(e.target.value)}
          placeholder="Buscar profissionais por nome..."
          aria-label="Buscar profissionais"
          className="w-full px-4 py-4 pl-14 border-2 border-cinza-suave dark:border-azul-medio rounded-xl focus:ring-2 focus:ring-azul-claro focus:border-azul-claro dark:bg-azul-escuro dark:text-white placeholder-cinza-medio dark:placeholder-azul-suave transition-all duration-300 shadow-sm hover:shadow-md"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-azul-claro dark:text-azul-suave"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </section>
  );
};

export default BarraBusca;

