# Estudaí — plataforma de aprendizagem

Produto educacional adaptativo para formação escolar, idiomas, comunicação e programação. O aluno descobre seu nível, segue trilhas práticas e acompanha a própria evolução.

## Executar

```bash
npm start
```

Abra `http://localhost:4173`. O servidor Node usa **Supabase/PostgreSQL** para todos os dados de usuário. Nenhum progresso, cadastro ou consentimento é salvo localmente. Consulte `supabase/schema.sql` e `.env.example`.

## Produto atual

- catálogo de 13 cursos;
- trilhas do iniciante ao avançado;
- diagnóstico multidisciplinar;
- cursos de JavaScript, Python, HTML/CSS, Java, SQL e Git;
- planos Explorar, Essencial, Pro e Família;
- pré-cadastro de teste gratuito por 30 dias;
- API de cursos, planos, progresso e testes;
- persistência em nuvem com Supabase;

## Estrutura

- `server.js`: servidor e APIs conectadas ao Supabase;
- `supabase/schema.sql`: estrutura, relações e políticas de segurança;
- `index.html`, `styles.css`, `app.js`: aplicação;
- `PRODUCT.md`: estratégia comercial e requisitos;
- `ROADMAP.md`: fases do produto;
- `materias/`: registros pedagógicos;
- `relatorios/`: histórico de sessões.

> Pagamentos reais ainda não estão habilitados. A cobrança só poderá ser ativada após autenticação, termos, política de privacidade e integração com um provedor certificado.
