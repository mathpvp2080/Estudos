# Estudaí 📚

Plataforma pessoal de preparação para o ENEM, começando no nível atual do estudante e evoluindo por trilhas adaptativas. Inclui diagnóstico por matéria, acompanhamento de progresso e JavaScript como trilha opcional.

## Usar o site

Execute `npm start` e abra `http://localhost:4173`. O servidor Node cria automaticamente um banco SQLite em `.data/estudai.db`, oferece APIs de conteúdo e progresso e salva resultados de simulados. Não há dependências externas.

A versão do GitHub Pages continua disponível como demonstração estática, mas recursos persistentes exigem o servidor.

## Organização

- `materias/`: estado e histórico resumido de cada matéria;
- `relatorios/`: relatórios datados de cada sessão;
- `dados/progresso.json`: números gerais;
- `CONTEXTO.md`: instruções e ponto de retomada para um novo chat;
- `dados/simulados.json`: catálogo de provas oficiais por ano;
- `dados/questoes/`: 735 questões estruturadas de 2020–2023;
- `server.js`: servidor, API e banco SQLite;
- `ROADMAP.md`: fases concluídas e próximas entregas;
- `THIRD_PARTY.md`: fontes e licenças dos dados;
- `index.html`, `styles.css` e `app.js`: aplicação web.

## Fluxo de uma sessão

Escolher matéria → consultar o progresso → estudar → praticar → registrar relatório → atualizar matéria e contexto → commit/push.

> O repositório é a fonte oficial dos registros. O site deliberadamente não usa `localStorage`, para evitar que o progresso fique preso a um único navegador.
