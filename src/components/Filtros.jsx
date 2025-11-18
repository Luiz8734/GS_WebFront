import React from 'react';

/**
 * Componente Filtros - Permite filtrar pessoas por área, cidade ou tecnologia
 * @param {Object} filtros - Objeto com os filtros ativos
 * @param {Function} aoAlterarFiltro - Função chamada quando um filtro é alterado
 * @param {Array} pessoas - Array com todas as pessoas para extrair valores únicos
 */
const Filtros = ({ filtros, aoAlterarFiltro, pessoas }) => {
  // Extrair valores únicos para os filtros
  const areas = [...new Set(pessoas.map(p => p.areaAtuacao))].sort();
  const cidades = [...new Set(pessoas.map(p => p.localizacao))].sort();
  const tecnologias = [...new Set(pessoas.flatMap(p => p.habilidadesTecnicas))].sort();

  return (
    <section className="bg-white dark:bg-azul-escuro rounded-xl shadow-lg p-6 mb-6 border border-cinza-suave dark:border-azul-medio animate-slide-down">
      <header className="mb-4">
        <h3 className="text-xl font-bold text-azul-escuro dark:text-white">
          Filtros
        </h3>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Filtro por Área */}
        <div>
          <label htmlFor="filtro-area" className="block text-sm font-semibold text-azul-escuro dark:text-azul-suave mb-2">
            Área de Atuação
          </label>
          <select
            id="filtro-area"
            value={filtros.area || ''}
            onChange={(e) => aoAlterarFiltro('area', e.target.value)}
            className="w-full px-4 py-3 border-2 border-cinza-suave dark:border-azul-medio rounded-lg focus:ring-2 focus:ring-azul-claro focus:border-azul-claro dark:bg-azul-escuro dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <option value="">Todas as áreas</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por Cidade */}
        <div>
          <label htmlFor="filtro-cidade" className="block text-sm font-semibold text-azul-escuro dark:text-azul-suave mb-2">
            Cidade
          </label>
          <select
            id="filtro-cidade"
            value={filtros.cidade || ''}
            onChange={(e) => aoAlterarFiltro('cidade', e.target.value)}
            className="w-full px-4 py-3 border-2 border-cinza-suave dark:border-azul-medio rounded-lg focus:ring-2 focus:ring-azul-claro focus:border-azul-claro dark:bg-azul-escuro dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <option value="">Todas as cidades</option>
            {cidades.map((cidade) => (
              <option key={cidade} value={cidade}>
                {cidade}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por Tecnologia */}
        <div>
          <label htmlFor="filtro-tecnologia" className="block text-sm font-semibold text-azul-escuro dark:text-azul-suave mb-2">
            Tecnologia
          </label>
          <select
            id="filtro-tecnologia"
            value={filtros.tecnologia || ''}
            onChange={(e) => aoAlterarFiltro('tecnologia', e.target.value)}
            className="w-full px-4 py-3 border-2 border-cinza-suave dark:border-azul-medio rounded-lg focus:ring-2 focus:ring-azul-claro focus:border-azul-claro dark:bg-azul-escuro dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <option value="">Todas as tecnologias</option>
            {tecnologias.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Botão Limpar Filtros */}
      {(filtros.area || filtros.cidade || filtros.tecnologia) && (
        <footer className="mt-4">
          <button
            onClick={() => {
              aoAlterarFiltro('area', '');
              aoAlterarFiltro('cidade', '');
              aoAlterarFiltro('tecnologia', '');
            }}
            className="px-6 py-2 bg-cinza-suave hover:bg-cinza-medio dark:bg-azul-medio dark:hover:bg-azul-claro text-azul-escuro dark:text-white rounded-lg transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
          >
            Limpar Filtros
          </button>
        </footer>
      )}
    </section>
  );
};

export default Filtros;

