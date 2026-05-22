# 🤖 Histórico de Prompts – Uso de IA no Projeto

Este arquivo documenta os principais prompts utilizados durante o desenvolvimento do projeto, demonstrando como a IA foi utilizada como ferramenta de apoio — e não como substituto do raciocínio técnico.

---

## 1. Definição da arquitetura

**Prompt utilizado:**
> "Preciso criar um projeto Cypress do zero para testar o site SauceDemo. Quero usar Page Object Model. Me ajuda a definir a estrutura de pastas e os arquivos que vou precisar antes de começar a codar?"

**Por que esse prompt:**
Antes de escrever qualquer linha de código, quis validar a arquitetura. Pedir a estrutura primeiro evita retrabalho e garante que o projeto já nasce organizado.

---

## 2. Criação dos Page Objects

**Prompt utilizado:**
> "Cria um Page Object para a página de login do SauceDemo usando Cypress. Quero que os elementos fiquem separados das ações, e que o objeto seja exportado como singleton."

**Por que esse prompt:**
Ser específica sobre o padrão (singleton, separação de elementos e ações) garante que a IA gera código alinhado com boas práticas, não apenas algo que funciona.

---

## 3. Teste de fluxo E2E

**Prompt utilizado:**
> "Cria um teste Cypress para o fluxo completo de compra no SauceDemo: login, adicionar dois produtos ao carrinho, validar os itens no carrinho, fazer checkout com dados de envio e validar a mensagem 'Thank you for your order!'. Usa os Page Objects já criados."

**Por que esse prompt:**
Detalhar cada etapa do fluxo evita que a IA pule validações importantes. Referenciar os Page Objects existentes garante consistência com o restante do projeto.

---

## 4. Teste de ordenação

**Prompt utilizado:**
> "Cria um teste Cypress que valida se a ordenação 'Low to High' no SauceDemo realmente ordena os preços do menor para o maior. Quero que o teste extraia os preços do DOM e compare com o array ordenado."

**Por que esse prompt:**
Pedir que o teste extraia e compare os valores reais (em vez de apenas checar visualmente) torna a validação mais robusta e menos suscetível a falsos positivos.

---

## 5. Auditoria do código gerado

Após cada geração, realizei as seguintes verificações manuais:

- ✅ Os seletores batem com os atributos reais do SauceDemo (`data-test`, `id`, classes)
- ✅ Os fluxos cobrem todas as etapas descritas no desafio
- ✅ As asserções validam comportamento real, não apenas presença de elementos
- ✅ Os testes são independentes entre si (cada um faz seu próprio login via `beforeEach`)
- ✅ Nenhum dado sensível hardcoded — credenciais são as públicas do próprio site de demo