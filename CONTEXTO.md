# Contexto para o próximo chat

## Visão do produto

O Estudaí é uma plataforma comercial de aprendizagem ampla. Não é uma plataforma dedicada a uma prova específica. Reúne formação escolar, idiomas, comunicação, tecnologia e programação em trilhas adaptativas.

## Objetivo

Construir um produto profissional e sustentável, com plano gratuito e assinaturas pagas. Os planos pagos terão 30 dias de teste gratuito. A plataforma deve medir o nível, recomendar o próximo passo e demonstrar evolução real.

## Regras

- Não usar marcas de exames ou materiais de terceiros como identidade do produto.
- Só publicar conteúdos próprios, licenciados ou de domínio/uso autorizado.
- Nunca prometer resultado acadêmico ou profissional.
- Não cobrar antes de implementar autenticação, consentimento, cancelamento, política de privacidade e provedor de pagamento certificado.
- Dados de cartão nunca devem passar pelo servidor da aplicação.

## Estado atual

- Catálogo com 13 cursos versionado no repositório.
- Formação escolar, idiomas e programação disponíveis.
- Quatro planos comerciais definidos.
- Pré-cadastro preparado para Supabase, sem persistência local e sem cobrança.
- Próxima fase: autenticação, perfis, conteúdos completos e integração de pagamento em ambiente de teste.

## Persistência obrigatória

Todos os dados de conta, consentimento, progresso e assinatura devem ficar no Supabase. Não reintroduzir SQLite, arquivos locais de usuário ou localStorage para progresso. O localStorage é permitido apenas para preferências técnicas não sensíveis, como a escolha do banner de cookies.
