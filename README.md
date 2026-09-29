# Landing Page — Placas Personalizadas em Vidro Temperado

Landing page institucional de alta conversão, responsiva (mobile-first), desenvolvida em **HTML semântico** com **Tailwind CSS (via CDN)** para negócio de placas personalizadas em vidro temperado para identificação de endereço (casas, chácaras, condomínios e loteamentos).

---

## 🎨 Paleta de Cores Rigorosa

| Cor | Hexadecimal | Aplicação Principal |
|---|---|---|
| **Verde escuro** | `#1B4D2E` | Títulos principais, molduras e destaques nobres |
| **Verde médio/oliva** | `#4C7A3E` | Faixas, fundos secundários e botões de apoio |
| **Verde claro** | `#8FAF56` | Ícones, acentos decorativos e bordas suaves |
| **Verde WhatsApp** | `#25D366` | Botões de conversão e botão flutuante de WhatsApp |
| **Fundo creme/bege claro** | `#F1EEE4` | Fundo geral da página (respiro natural e elegante) |
| **Branco** | `#FFFFFF` | Fundo dos cards, contrastes e reflexos de vidro |
| **Texto escuro neutro** | `#1A1A1A` | Tipografia de leitura e corpo de texto |

*Observação: Nenhuma cor fora desta lista foi utilizada no projeto.*

---

## 📱 Como Configurar o WhatsApp

No final do arquivo `index.html` (por volta da linha 960), localize o bloco de script:

```javascript
const CONFIG_WHATSAPP = {
  numero: "5500000000000", // <<< COLOQUE SEU WHATSAPP AQUI
  mensagemPadrao: "Olá! Vi o site e gostaria de solicitar um orçamento para uma placa personalizada em vidro temperado."
};
```

1. Substitua `"5500000000000"` pelo seu número com DDI e DDD (exemplo: `"5511999998888"`).
2. Todos os botões da página (Header, Hero, Galeria de Modelos, CTA Final e Botão Flutuante) serão atualizados automaticamente!

---

## 📸 Como Adicionar as Fotos Reais dos Seus Produtos

Os locais para fotos reais estão claramente sinalizados com comentários e tags especiais no arquivo `index.html`.

Exemplo:
```html
<!-- Para substituir pelo arquivo real de imagem do cliente: -->
<!-- Remova o bloco visual de demonstração e insira: -->
<img src="caminho/sua-foto-placa.jpg" alt="Placa Canto das Árvores" class="w-full h-auto rounded-xl object-cover">
```

### Onde estão os placeholders:
1. **Hero (Destaque Principal):** Linha ~230 do `index.html`
2. **Card 1 ("Canto das Árvores"):** Linha ~440 do `index.html`
3. **Card 2 ("Quadra 04"):** Linha ~495 do `index.html`
4. **Card 3 ("Lote 02"):** Linha ~550 do `index.html`
5. **Card 4 ("Recanto dos Pássaros"):** Linha ~605 do `index.html`
6. **Card 5 ("Vila das Acácias - Panorâmico"):** Linha ~665 do `index.html`

---

## 🚀 Como Visualizar a Página

Basta dar um duplo clique no arquivo [`index.html`](file:///C:/Users/Vinicius%20Pereira/Documents/Project%20Dev/Placas%20personalizadas/index.html) para abri-lo diretamente em qualquer navegador moderno (Chrome, Edge, Safari, Firefox).
Não requer compilação ou instalação de dependências locais (o Tailwind CSS e as fontes do Google Fonts são carregados automaticamente via CDN).
