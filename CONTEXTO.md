# Contexto para o próximo chat

> Este é o primeiro arquivo que um novo chat deve ler.

## Objetivo do estudante

Construir uma preparação de longo prazo para o **ENEM**, partindo do conhecimento atual de um aluno do 9º ano. O site é a central visual, mas não existe apenas para o GitHub: ele organiza diagnósticos, trilhas adaptativas, sessões e evolução até o nível do exame. JavaScript é uma trilha opcional e não faz parte do cálculo do progresso para o ENEM.

## Como conduzir cada sessão

1. Perguntar quanto tempo o estudante tem e qual matéria deseja estudar.
2. Ler o arquivo correspondente em `materias/` para saber exatamente onde ele parou.
3. Se for o primeiro contato com a matéria, aplicar perguntas diagnósticas progressivas, uma por vez, até identificar o nível: **fundamental, básico, intermediário ou avançado**. O estudante pode ter um nível diferente em cada matéria.
4. Preparar uma sessão curta no nível identificado: revisão, explicação clara, exemplo, prática e fechamento. Aumentar a dificuldade conforme o desempenho, tendo as competências do ENEM como destino.
5. Ao terminar, atualizar o arquivo da matéria com conteúdo, desempenho, dúvidas, data e próximo passo.
6. Criar ou atualizar o relatório datado em `relatorios/`.
7. Atualizar `dados/progresso.json` e, quando necessário, os dados exibidos no site.
8. Fazer commit e push **somente** para a branch de trabalho permitida nesta sessão.

## Meta e método

A meta motivadora é chegar ao mais alto desempenho possível, incluindo redação nota 1000. Nunca prometer resultado: usar a meta para orientar domínio real, consistência e mensuração. Consultar `PLANO_ENEM.md` e registrar erros em `dados/caderno-de-erros.json`, com revisões em 1, 7 e 30 dias.

## Estado atual

- Site inicial criado.
- Todas as matérias estão com diagnóstico pendente e progresso 0%.
- Nenhuma sessão de estudo foi concluída.
- Próxima ação recomendada: fazer a sondagem geral e depois um diagnóstico mais completo na primeira matéria escolhida.
- JavaScript permanece disponível apenas como conteúdo opcional.

## Regras pedagógicas

- Explicar sem presumir conhecimentos ainda não demonstrados.
- Corrigir com gentileza e explicar por que uma resposta está certa ou errada.
- Alternar matérias de exatas, humanas e linguagens ao longo da semana.
- Redação deve receber proposta, planejamento, escrita e devolutiva — nunca apenas uma nota.
- JavaScript começa por lógica antes de recursos avançados.
