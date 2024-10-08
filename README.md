# Gerador de Corridas

## Descrição
Esta aplicação permite a criação e o cancelamento de corridas para um usuário, seguindo regras predefinidas. Ela utiliza Node.js com o framework Express e pode ser executada com SQLite como banco de dados em memória.

## Decisões Técnicas
- **Node.js + Express**: Escolhido pela simplicidade na criação de APIs REST.
- **SQLite em memória**: Permite a simulação de um banco de dados sem a necessidade de infraestrutura externa.
- **Jest**: Utilizado para realizar testes unitários e garantir que as funcionalidades principais estão funcionando corretamente.

## Instruções para Execução
1. Clone o repositório.

2. Instale as dependências:
npm install

3. Execute a aplicação:
npm start

4. Para rodar os testes:
npm test

## Notas Adicionais
- A aplicação roda por padrão na porta 3000.
- A aplicação não depende de nenhum serviço externo, tudo roda localmente em memória.
