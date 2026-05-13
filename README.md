# Doutor Feridas - Landing Page Santo Amaro

Landing page da unidade **Santo Amaro** do Doutor Feridas, clinica especializada em tratamento de feridas e cicatrizacao.

**URL Cloudflare Pages:** https://doutor-feridas-santo-amaro.pages.dev
**URL customizada planejada:** https://santoamaro.doutorferidas.com.br
**Hospedagem:** Cloudflare Pages
**Stack:** HTML estatico + Tailwind CSS compilado

> Status atual: o dominio `santoamaro.doutorferidas.com.br` ainda precisa ser configurado no DNS/Cloudflare. O deploy ativo esta no dominio `pages.dev`.

## Desenvolvimento Local

Instale as dependencias uma vez:

```bash
npm ci
```

Gere o CSS:

```bash
npm run build
```

Depois abra `index.html` no navegador ou rode um servidor estatico:

```bash
npx serve .
```

## Deploy

O deploy automatico acontece por GitHub Actions a cada push na branch `main`.

Workflow:

1. Checkout do repositorio.
2. `npm ci`.
3. `npm run build`.
4. `wrangler pages deploy . --project-name doutor-feridas-santo-amaro`.

Deploy manual:

```bash
$env:CLOUDFLARE_ACCOUNT_ID = "75a0477c2e9ca9718e179c140d54f429"
npx wrangler pages deploy . --project-name doutor-feridas-santo-amaro
```

## Estrutura

```text
doutor-feridas-santo-amaro/
├── index.html
├── style.css
├── src/input.css
├── assets/
│   ├── depoimentos/
│   ├── feridas/
│   ├── clinica/
│   ├── doutor-feridas-logo-horizontal.png
│   ├── doutor-feridas-logo-horizontal-white.png
│   ├── doutor-feridas-equipe-santo-amaro.jpeg
│   └── doutor-feridas-certificado-de-alta-paciente-*.jpeg
├── interno-coleta-depoimentos/
├── .github/workflows/deploy.yml
├── package.json
└── wrangler.toml
```

## Checklist Antes De Publicar

- [x] Links de WhatsApp apontando para o link business da unidade.
- [x] Prints reais de avaliacoes do Google no bloco de depoimentos.
- [x] Fotos de condicoes copiadas para `assets/feridas`.
- [x] Logo oficial extraido do manual de marca.
- [x] Foto real da equipe.
- [x] Certificados de alta adicionados como prova visual.
- [ ] Configurar DNS/custom domain `santoamaro.doutorferidas.com.br`.
- [ ] Testar visualmente em mobile e desktop apos deploy.
- [ ] Instalar Microsoft Clarity pos-lancamento.

## Pagina Interna

A pasta `interno-coleta-depoimentos/` contem a pagina de instrucao para coleta de depoimentos pela equipe clinica. Ela e material interno e nao deve substituir a landing principal.

## Licenca

Copyright 2026 Doutor Feridas. Todos os direitos reservados.
