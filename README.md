# Site Higor & Luciana

Site de casamento em HTML/CSS/JS puro — sem build, sem dependências. Abre direto no navegador ou em qualquer hospedagem estática gratuita.

## Estrutura
```
site-casamento/
├── index.html      → todo o conteúdo/seções
├── css/style.css   → identidade visual (cores, fontes, layout)
├── js/script.js    → abertura do envelope, contador, scroll reveal, menu
└── assets/         → coloque aqui as imagens (fotos, ilustração do local)
```

## Já preenchido com dados reais (do manual/save the date)
- Nomes: Luciana & Higor
- Data/hora: 18 de outubro de 2026, às 09:00 (`js/script.js` → `WEDDING_DATE`)
- Local: Estância dos Sonhos, Anápolis-GO (usado no local da cerimônia E do evento — só havia um endereço no Save the Date; avise se a recepção for em outro lugar)
- Versículo: Isaías 41:20
- Logo/monograma real: `assets/logo-monograma.jpg`
- Foto do local: `assets/local-foto.jpg`
- Paleta trocada de verde para marrom, combinando com o logo de vocês

## O que ainda precisa trocar (busque por "TROCAR" no código)

1. **Link do Google Forms** de confirmação de presença (botão "Confirme a presença").
2. **Itens reais da Lista de Presentes** (nome, preço, foto, ação do botão "Presentear" — ainda não decidido).
3. **Traje dos convidados** na seção de informações — hoje está com texto de exemplo, porque o marrom já ficou reservado para padrinhos/madrinhas.
4. **Manual dos padrinhos e madrinhas** (traje da madrinha marrom longo, padrinho terno bege escuro + gravata marrom, aluguel na Sarney Amorim) — ainda não está no site. Preciso saber se isso entra:
   - dentro do "Manual dos convidados" (fica visível pra todo mundo), ou
   - numa página separada, com link privado só pra quem é padrinho/madrinha.

### Como pegar o link certo do Google Maps
Busque o local no Google Maps → "Compartilhar" → "Copiar link". Cole no `href` do botão correspondente em `index.html`.

## Testar localmente
Basta abrir `index.html` no navegador. Para simular como fica publicado (recomendado, evita bug de caminho de arquivo):
```
cd site-casamento
python3 -m http.server 8000
```
Depois acesse `http://localhost:8000`.

## Publicar de graça
Qualquer uma destas opções funciona bem para esse tipo de site:

- **GitHub Pages**: sobe a pasta pra um repositório, ativa Pages nas configurações do repo, pronto.
- **Vercel** / **Netlify**: arrasta a pasta no dashboard (deploy manual) ou conecta ao GitHub — dá um link tipo `seusite.vercel.app`, e dá pra apontar um domínio próprio depois (ex: `higorluciana.com`).

## Lista de presentes
Por enquanto os botões "Presentear" não fazem nada — é só o layout. Precisamos decidir juntos como vai funcionar: link de PIX por item, redirecionar pra loja/parceiro, ou uma página própria com QR code. Assim que definir eu implemento.
