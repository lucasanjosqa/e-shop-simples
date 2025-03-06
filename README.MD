# E-Shop Simples

![E-Shop Simples](https://img.shields.io/badge/Status-Concluído-green)  
Uma aplicação web simples de e-commerce desenvolvida como um projeto de demonstração de habilidades em desenvolvimento front-end e boas práticas de qualidade de software.

## 📖 Descrição
O **E-Shop Simples** é uma aplicação web que simula uma loja virtual básica. Permite aos usuários criar uma conta, fazer login, visualizar produtos, adicionar itens ao carrinho e finalizar compras. O projeto foi construído com tecnologias leves e acessíveis (HTML, CSS e JavaScript), sem dependências externas, e usa `localStorage` para simular persistência de dados.

Este projeto foi criado como parte de um desafio técnico para demonstrar competências em:
- Desenvolvimento de interfaces navegáveis.
- Implementação de fluxos funcionais.
- Documentação clara e profissional.

## ✨ Funcionalidades
- **Cadastro de Usuário**: Crie uma conta com e-mail e senha.
- **Login**: Autenticação básica com validação local.
- **Lista de Produtos**: Exibição de itens fictícios com opção de adicionar ao carrinho.
- **Carrinho**: Visualize e gerencie os itens selecionados.
- **Checkout**: Finalize a compra com validação simples de cartão.

## 🚀 Como Rodar o Projeto
### Pré-requisitos
- Um navegador web moderno (ex.: Chrome, Firefox).
- Opcional: Git instalado para clonar o repositório.

### Instruções
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/lucasanjosqa/e-shop-simples.git
   ```
2. **Acesse a pasta do projeto**:
   ```bash
   cd e-shop-simples
   ```
3. **Abra o arquivo principal**:
   - Localize o arquivo `index.html` e abra-o em um navegador (clique duplo ou arraste para o navegador).
4. **Navegue**:
   - Use a página de login (`index.html`) ou cadastro (`register.html`) para começar.

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilização básica e responsividade.
- **JavaScript**: Lógica de interação e simulação de backend com `localStorage`.

## 📂 Estrutura do Projeto
```
e-shop-simples/
├── index.html          # Página de login
├── register.html       # Página de cadastro
├── home.html           # Lista de produtos
├── cart.html           # Carrinho de compras
├── checkout.html       # Finalização de compra
├── styles.css          # Estilos globais
├── scripts.js          # Lógica da aplicação
├── README.md           # Documentação principal
└── README-TESTES.md    # Documentação de testes
```

## 🧪 Testes
Como engenheiro de qualidade de software, planejei o projeto com testes em mente:
- **Testes Manuais**: Cenários de login, cadastro e checkout foram validados manualmente.
- **Testes Automatizados**: Um script básico com Cypress foi criado para validar o fluxo de login.
- **Bugs Identificados**: Durante testes exploratórios, notei validações ausentes (ex.: e-mail inválido aceito).

Para detalhes completos dos testes, veja:
- **[Documentação de Testes](https://github.com/lucasanjosqa/e-shop-simples/blob/main/README-TESTES.MD)**: Planos, resultados e relatórios de bugs.


## 📧 Contato
- **Autor**: Lucas Anjos
- **GitHub**: [lucasanjosqa](https://github.com/lucasanjosqa)
- **E-mail**: (opcional, adicione se quiser)

## 📜 Licença
Este projeto é de código aberto e está sob a licença MIT. Veja o arquivo `LICENSE` (a ser adicionado) para mais detalhes.
