# Estudaí 📚

Plataforma pessoal de preparação para o ENEM, começando no nível atual do estudante e evoluindo por trilhas adaptativas. Inclui diagnóstico por matéria, acompanhamento de progresso e JavaScript como trilha opcional.

## Usar o site

Abra `index.html` ou acesse a publicação do GitHub Pages. O site é estático e não envia dados pessoais a servidores.

## Organização

- `materias/`: estado e histórico resumido de cada matéria;
- `relatorios/`: relatórios datados de cada sessão;
- `dados/progresso.json`: números gerais;
- `CONTEXTO.md`: instruções e ponto de retomada para um novo chat;
- `index.html`, `styles.css` e `app.js`: aplicação web.

## Fluxo de uma sessão

Escolher matéria → consultar o progresso → estudar → praticar → registrar relatório → atualizar matéria e contexto → commit/push.

> O repositório é a fonte oficial dos registros. O site deliberadamente não usa `localStorage`, para evitar que o progresso fique preso a um único navegador.
