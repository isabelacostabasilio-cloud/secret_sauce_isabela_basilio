# 🧪 Secret Sauce – Automação de Testes E2E

Projeto de automação de testes end-to-end desenvolvido para o desafio técnico de Analista de QA, utilizando **Cypress** com arquitetura **Page Object Model (POM)**.

A aplicação testada é o [SauceDemo (Swag Labs)](https://www.saucedemo.com/), um e-commerce de demonstração.

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm (incluído com o Node.js)

---

## ⚙️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/isabelacostabasilio-cloud/secret_sauce_isabela_basilio.git
cd secret_sauce_isabela_basilio
npm install
```

---

## ▶️ Como executar os testes

### Interface gráfica (modo interativo)
```bash
npm run cy:open
```

### Modo headless (linha de comando)
```bash
npm run cy:run
```

---

## 🗂️ Arquitetura do Projeto

O projeto segue o padrão **Page Object Model (POM)**, separando a lógica de interação com a UI dos arquivos de teste.

cypress/
├── e2e/                  # Arquivos de teste
│   ├── login.cy.js       # Testes de autenticação
│   ├── checkout.cy.js    # Fluxo completo de compra E2E
│   └── sorting.cy.js     # Ordenação de produtos
├── pages/                # Page Objects
│   ├── LoginPage.js      # Elementos e ações da tela de login
│   ├── InventoryPage.js  # Elementos e ações do catálogo
│   └── CartPage.js       # Elementos e ações do carrinho e checkout
└── support/
├── commands.js       # Comandos customizados do Cypress
└── e2e.js            # Configuração global dos testes
cypress.config.js         # Configuração do Cypress

### Por que POM?

- **Manutenibilidade:** se um seletor muda na UI, a alteração é feita em um único lugar
- **Reusabilidade:** as ações de cada página são compartilhadas entre diferentes testes
- **Legibilidade:** os testes ficam mais próximos de linguagem natural

---

## 🤖 Uso de Inteligência Artificial

Este projeto utilizou IA como ferramenta de apoio no processo de desenvolvimento. Todos os prompts utilizados estão documentados no arquivo [PROMPTS.md](./PROMPTS.md), incluindo a linha de raciocínio por trás de cada decisão.

---

## 🔍 Cenários cobertos

| Cenário | Arquivo | Status |
|---|---|---|
| Login com credenciais válidas | `login.cy.js` | ✅ |
| Login com usuário bloqueado | `login.cy.js` | ✅ |
| Fluxo de compra completo E2E | `checkout.cy.js` | ✅ |
| Ordenação por preço (Low to High) | `sorting.cy.js` | ✅ |