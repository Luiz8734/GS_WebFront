import React from 'react';

/**
 * Componente CartaoPessoa - Exibe um card com informações básicas de uma pessoa
 * @param {Object} pessoa - Objeto contendo dados da pessoa
 * @param {Function} onClick - Função chamada ao clicar no card
 */
const CartaoPessoa = ({ pessoa, onClick }) => {
  return (
    <article
      onClick={() => onClick(pessoa)}
      className="group bg-white dark:bg-azul-escuro rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-cinza-suave dark:border-azul-medio hover-lift animate-fade-in"
    >
      <div className="p-6">
        {/* Cabeçalho do card com foto e informações básicas */}
        <header className="flex flex-col items-center text-center mb-5">
          <div className="mb-4">
            <img
              src={pessoa.foto}
              alt={`Foto de perfil de ${pessoa.nome}`}
              className="w-24 h-24 rounded-full object-cover border-4 border-azul-claro dark:border-azul-suave shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full">
            <h3 className="text-xl font-bold text-azul-escuro dark:text-white mb-1 group-hover:text-azul-claro transition-colors">
              {pessoa.nome}
            </h3>
            <p className="text-sm text-azul-medio dark:text-azul-suave font-semibold mb-2">
              {pessoa.cargo}
            </p>
            <p className="text-xs text-cinza-medio dark:text-cinza-suave">
              {pessoa.localizacao}
            </p>
          </div>
        </header>
        
        {/* Divisor visual */}
        <div className="h-px bg-gradient-to-r from-transparent via-cinza-suave dark:via-azul-medio to-transparent mb-5"></div>
        
        {/* Seção de habilidades principais */}
        <section>
          <p className="text-xs font-semibold text-azul-escuro dark:text-azul-suave mb-3 uppercase tracking-wider text-center">
            Principais Skills
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {pessoa.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs bg-azul-claroBg dark:bg-azul-medio text-azul-escuro dark:text-azul-suave rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
            {pessoa.habilidadesTecnicas.length > 3 && (
              <span className="px-3 py-1.5 text-xs bg-cinza-suave dark:bg-cinza-escuro text-cinza-medio dark:text-cinza-suave rounded-lg font-medium">
                +{pessoa.habilidadesTecnicas.length - 3}
              </span>
            )}
          </div>
        </section>
      </div>
      
      {/* Barra decorativa inferior com gradiente */}
      <div className="h-1 bg-gradient-to-r from-azul-claro via-azul-suave to-azul-claro"></div>
    </article>
  );
};

export default CartaoPessoa;

