# Guia de Contribuição

## Introdução

Bem-vindo ao projeto de desafio da lading page do js-vix! Este guia irá ajudá-lo a contribuir para o projeto de forma efetiva. Antes de começar, certifique-se de ter instalado na sua máquina:

- Git
- Node.js
- VS Code

## Passo 1: Clone o projeto

Agora clone o projeto na sua máquina:

```bash
git clone https://github.com/js-vix/landing-page.git
```

## Passo 2: Instalar as depêndencias

```bash
npm install
```

### Passo 3: Crie uma Branch para sua Feature

Crie uma nova branch para trabalhar na sua feature usando o comando:

```bash
git checkout -b nome-da-sua-branch
```

Certifique-se de escolher um nome descritivo para a sua branch.

Siga o padrão de nomenclatura recomendado, exemplo:

```bash
## Tipos de branchs
# component/navbar: quando for criar um novo componente
# refactor/navbar: quando fizer uma refatoração em um componente já existente
# test/navbar: quando fizer somente a inclusão de novos testes para um componente existente
# docs/readme: quando fizer alguma alteração em documentação
```

### Passo 4: Faça as Modificações

Agora você pode fazer as modificações necessárias no código.
Use as melhores práticas de programação e siga as diretrizes do projeto.

### Passo 5: Commit e Push das Modificações

Adicione as modificações usando o comando:

```bash
git add .
```

Faça o commit das modificações usando os padrões indicados com o comando:

```bash
git commit -m "(tipo-de-inserção): descrição das modificações"

## Tipos de inserção:
# feature: quando inserir uma nova funcionalidade
# refactor: quando fizer uma refatoração em componentes existentes
# test:  quando fizer a inclusão de testes em componentes existentes
# doc: quando fizer a inclusão ou edição de documentações
```

Envie as modificações para o seu repositório remoto usando o comando:

```bash
git push origin nome-da-sua-branch
```

### Passo 6: Resolva Conflitos (se necessário)

Caso haja conflitos ao fazer o push, resolva-os localmente no seu editor de código.
Use o comando `git add .` para adicionar as modificações resolvidas ao stage.
Faça o commit das modificações resolvidas usando o comando `git commit -m "Conflitos resolvidos"`.
Envie as modificações resolvidas para o seu repositório remoto usando o comando `git push origin nome-da-sua-branch`.

### Passo 7: Crie um Pull Request

Navegue até a página do repositório no GitHub.
Clique no botão "Compare & pull request" ao lado da sua branch.
Preencha as informações necessárias no formulário do Pull Request.
Clique em "Create pull request" para enviar o Pull Request para o repositório principal.
Agora você contribuiu com sucesso para o projeto!

Lembre-se de acompanhar o status do seu Pull Request e estar aberto a feedback e sugestões dos mantenedores do projeto.

Lembre-se de que este é apenas um guia básico e que cada projeto pode ter suas próprias diretrizes de contribuição. Certifique-se de ler e seguir as instruções específicas do projeto em que você está contribuindo.

Se você tiver mais dúvidas, estou aqui para ajudar!
