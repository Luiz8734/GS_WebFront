import React from 'react';

/**
 * Componente ModalPerfil - Exibe modal com perfil completo da pessoa
 * @param {Object} pessoa - Objeto contendo todos os dados da pessoa
 * @param {boolean} aberto - Indica se o modal está aberto
 * @param {Function} aoFechar - Função para fechar o modal
 * @param {Function} aoRecomendar - Função chamada ao recomendar a pessoa
 * @param {Function} aoEnviarMensagem - Função chamada ao enviar mensagem
 */
const ModalPerfil = ({ pessoa, aberto, aoFechar, aoRecomendar, aoEnviarMensagem }) => {
  if (!aberto || !pessoa) return null;

  return (
    <dialog
      open={aberto}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
      onClick={aoFechar}
      aria-modal="true"
      aria-labelledby="modal-titulo"
    >
      <article
        className="bg-white dark:bg-azul-escuro rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in border-2 border-azul-claro dark:border-azul-medio"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho fixo do modal */}
        <header className="sticky top-0 bg-white dark:bg-azul-escuro border-b-2 border-azul-claro dark:border-azul-medio p-6 flex justify-between items-center z-10 shadow-md">
          <h2 id="modal-titulo" className="text-2xl font-bold text-azul-escuro dark:text-white">
            Perfil de {pessoa.nome}
          </h2>
          <button
            onClick={aoFechar}
            className="text-cinza-medio hover:text-azul-escuro dark:hover:text-white text-3xl font-bold transition-colors duration-200 hover:scale-110"
            aria-label="Fechar modal"
          >
            ×
          </button>
        </header>

        <div className="p-6 space-y-6">
          {/* Seção principal com foto e informações básicas */}
          <section className="flex items-start space-x-6 pb-6 border-b-2 border-cinza-suave dark:border-azul-medio">
            <div className="relative">
              <img
                src={pessoa.foto}
                alt={`Foto de perfil de ${pessoa.nome}`}
                className="w-36 h-36 rounded-full object-cover border-4 border-azul-claro dark:border-azul-suave shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-azul-escuro dark:text-white mb-2">
                {pessoa.nome}
              </h3>
              <p className="text-xl text-azul-medio dark:text-azul-suave mb-3 font-semibold">
                {pessoa.cargo}
              </p>
              <div className="space-y-2 text-cinza-medio dark:text-cinza-suave">
                <p className="font-medium">{pessoa.localizacao}</p>
                <p className="font-medium">{pessoa.areaAtuacao}</p>
                {pessoa.email && (
                  <p className="font-medium">{pessoa.email}</p>
                )}
              </div>
            </div>
          </section>

          {/* Resumo */}
          <section>
            <h4 className="text-xl font-bold text-azul-escuro dark:text-white mb-3">
              Resumo
            </h4>
            <p className="text-cinza-escuro dark:text-cinza-suave leading-relaxed">
              {pessoa.resumo || pessoa.descricao}
            </p>
          </section>

          {/* Habilidades Técnicas */}
          <section>
            <h4 className="text-xl font-bold text-azul-escuro dark:text-white mb-3">
              Habilidades Técnicas
            </h4>
            <div className="flex flex-wrap gap-2">
              {pessoa.habilidadesTecnicas.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-azul-claroBg dark:bg-azul-medio text-azul-escuro dark:text-azul-suave rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <h4 className="text-xl font-bold text-azul-escuro dark:text-white mb-3">
              Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {pessoa.softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experiências Profissionais */}
          <section>
            <h4 className="text-xl font-bold text-azul-escuro dark:text-white mb-4">
              Experiências Profissionais
            </h4>
            <div className="space-y-4">
              {pessoa.experiencias.map((exp, index) => (
                <article
                  key={index}
                  className="border-l-4 border-azul-claro dark:border-azul-suave pl-4 py-3 bg-cinza-suave dark:bg-azul-medio rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h5 className="font-bold text-azul-escuro dark:text-white text-lg">
                    {exp.cargo} - {exp.empresa}
                  </h5>
                  <p className="text-sm text-azul-medio dark:text-azul-suave font-medium">
                    {exp.dataInicio} - {exp.dataFim}
                  </p>
                  <p className="text-cinza-escuro dark:text-cinza-suave mt-2 leading-relaxed">
                    {exp.descricao}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Formação Acadêmica */}
          <section>
            <h4 className="text-xl font-bold text-azul-escuro dark:text-white mb-3">
              Formação Acadêmica
            </h4>
            <div className="space-y-3">
              {pessoa.formacao.map((form, index) => (
                <article key={index} className="bg-cinza-suave dark:bg-azul-medio p-4 rounded-lg shadow-sm">
                  <p className="font-bold text-azul-escuro dark:text-white">{form.curso}</p>
                  <p className="text-sm text-azul-medio dark:text-azul-suave">
                    {form.instituicao} - {form.ano}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Projetos */}
          <section>
            <h4 className="text-xl font-bold text-azul-escuro dark:text-white mb-3">
              Projetos
            </h4>
            <div className="space-y-3">
              {pessoa.projetos.map((projeto, index) => (
                <article
                  key={index}
                  className="border-2 border-azul-claro dark:border-azul-medio rounded-lg p-4 hover:shadow-lg transition-shadow bg-white dark:bg-azul-escuro"
                >
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-azul-claro dark:text-azul-suave hover:text-azul-escuro dark:hover:text-white font-bold text-lg flex items-center gap-2 transition-colors"
                  >
                    {projeto.titulo} <span>→</span>
                  </a>
                  <p className="text-cinza-escuro dark:text-cinza-suave mt-2">
                    {projeto.descricao}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Certificações */}
          <section>
            <h4 className="text-xl font-bold text-azul-escuro dark:text-white mb-3">
              Certificações
            </h4>
            <div className="flex flex-wrap gap-2">
              {pessoa.certificacoes.map((cert, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold shadow-md"
                >
                  {cert}
                </span>
              ))}
            </div>
          </section>

          {/* Idiomas */}
          <section>
            <h4 className="text-xl font-bold text-azul-escuro dark:text-white mb-3">
              Idiomas
            </h4>
            <div className="space-y-2">
              {pessoa.idiomas.map((idioma, index) => (
                <p key={index} className="text-cinza-escuro dark:text-cinza-suave">
                  <span className="font-bold text-azul-escuro dark:text-white">{idioma.idioma}:</span>{' '}
                  {idioma.nivel}
                </p>
              ))}
            </div>
          </section>

          {/* Áreas de Interesse */}
          <section>
            <h4 className="text-xl font-bold text-azul-escuro dark:text-white mb-3">
              Áreas de Interesse
            </h4>
            <div className="flex flex-wrap gap-2">
              {pessoa.areasInteresse.map((area, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-semibold shadow-md"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

          {/* Botões de Ação */}
          <footer className="flex gap-4 pt-6 border-t-2 border-cinza-suave dark:border-azul-medio">
            <button
              onClick={aoRecomendar}
              className="flex-1 bg-azul-claro hover:bg-azul-escuro text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Recomendar Profissional
            </button>
            <button
              onClick={aoEnviarMensagem}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Enviar Mensagem
            </button>
          </footer>
        </div>
      </article>
    </dialog>
  );
};

export default ModalPerfil;

