# Estratégia do produto Estudaí

## Proposta de valor

Uma assinatura de aprendizagem contínua que combina base escolar, idiomas e habilidades digitais. O diferencial não é apenas disponibilizar aulas: é diagnosticar, recomendar, praticar e mostrar evolução.

## Públicos iniciais

1. estudantes que querem reforçar conteúdos escolares;
2. jovens e adultos aprendendo programação;
3. famílias que desejam acompanhar até quatro perfis;
4. pessoas começando um novo idioma.

O lançamento deve começar com um público e poucas trilhas excelentes, em vez de dezenas de cursos superficiais.

## Planos propostos para validação

| Plano | Preço inicial | Objetivo |
|---|---:|---|
| Explorar | Gratuito | aquisição e demonstração de valor |
| Essencial | R$ 29,90/mês | formação escolar e rotina de estudos |
| Pro | R$ 59,90/mês | catálogo completo, programação e relatórios |
| Família | R$ 89,90/mês | até quatro perfis independentes |

Os preços são hipóteses e devem ser testados com usuários antes do lançamento.

## Teste gratuito

- duração: 30 dias nos planos pagos;
- informar claramente a data do fim do teste;
- enviar lembretes antes da primeira cobrança;
- permitir cancelamento simples;
- evitar cobrança surpresa;
- definir se cartão será exigido apenas após pesquisa com usuários.

O protótipo atual faz somente pré-cadastro e não realiza cobranças.

## Requisitos antes de vender

- empresa e enquadramento fiscal adequados;
- Termos de Uso e Política de Privacidade revisados;
- conformidade com LGPD, especialmente para menores;
- autenticação e autorização seguras;
- provedor de pagamento certificado;
- webhooks idempotentes;
- emissão de documentos fiscais quando aplicável;
- política de cancelamento, reembolso e atendimento;
- direitos autorais ou licenças de todos os conteúdos;
- backups, logs, monitoramento e resposta a incidentes.

## Métricas essenciais

- ativação: primeira aula concluída;
- conversão do teste para assinatura;
- retenção em 30 e 90 dias;
- aulas e exercícios concluídos por semana;
- evolução por habilidade;
- cancelamento e motivo;
- satisfação e solicitações de suporte.

## Arquitetura de dados definida

O produto usa Supabase/PostgreSQL como fonte única para contas, progresso, consentimentos e assinaturas. O backend guarda a `service_role` somente em variáveis secretas. Row Level Security protege dados por usuário. Nenhum dado acadêmico deve depender do dispositivo ou ficar apenas local.
