# Configuração de Tema para Angular Material

Este projeto é uma aplicação **Angular 18** que demonstra como
configurar e utilizar **theming dinâmico** no **Angular Material**,
unindo:

-   **SCSS** com `@use '@angular/material'` para configuração base.\
-   **CSS custom properties** (`easy-theming.css`) para sobrescrever
    variáveis de cores em tempo real.\
-   **Serviços Angular** para alternância de temas dinâmicos.

Ele serve como um guia prático e ponto de partida para desenvolvedores
que desejam personalizar a aparência de seus componentes e oferecer
suporte a múltiplos temas.

------------------------------------------------------------------------

## 🚀 Começando

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **Angular CLI** instalados:

``` bash
npm install -g @angular/cli
```

### Instalação

Clone este repositório e instale as dependências:

``` bash
git clone https://github.com/renatopedrosal/material-theming-example.git
cd material-theming-example
npm install
```

### Executando o Projeto

``` bash
ng serve
```

A aplicação estará disponível em <http://localhost:4200>.

------------------------------------------------------------------------

## 🎨 Configuração do Theming

### 1. Estrutura de Temas

O projeto utiliza **três camadas de theming**:

1.  **SCSS base (`styles.scss`)** -- define o tema Angular Material com
    `mat.define-light-theme` e `mat.define-dark-theme`.\
2.  **CSS custom properties (`easy-theming.css`)** -- mapeia tokens do
    Angular Material para variáveis CSS (`--primary`, `--background`,
    etc.).\
3.  **Serviços Angular (`theme-selector.service.ts` e
    `theming.service.ts`)** -- controlam a aplicação das classes de tema
    dinamicamente.

------------------------------------------------------------------------

### 2. Exemplo de SCSS Base (`styles.scss`)

``` scss
@use '@angular/material' as mat;

@include mat.core();

$primary-palette: mat.define-palette(mat.$indigo-palette);
$accent-palette: mat.define-palette(mat.$pink-palette, A200, A100, A400);

$app-light-theme: mat.define-light-theme((
  color: (
    primary: $primary-palette,
    accent: $accent-palette,
  )
));

$app-dark-theme: mat.define-dark-theme((
  color: (
    primary: $primary-palette,
    accent: $accent-palette,
  )
));

// Aplica tema claro por padrão
@include mat.all-component-themes($app-light-theme);

.dark-theme {
  @include mat.all-component-colors($app-dark-theme);
}
```

------------------------------------------------------------------------

### 3. CSS Custom Properties (`easy-theming.css`)

Este arquivo expõe variáveis para **toolbar, buttons, checkboxes,
inputs, tables, menus, dialogs, etc.**\
Exemplo:

``` css
body {
  /* Toolbar */
  --mat-toolbar-container-background-color: var(--primary);
  --mat-toolbar-container-text-color: var(--primary-light);

  /* Buttons */
  --mdc-filled-button-container-color: var(--primary);
  --mdc-filled-button-label-text-color: var(--primary-light);

  /* Background */
  --mat-app-background-color: var(--background);
}
```

Essas variáveis são aplicadas automaticamente conforme o tema ativo.

------------------------------------------------------------------------

### 4. Alternância Dinâmica de Temas

#### `ThemeSelectorService`

Gerencia os temas disponíveis (claro, escuro, customizados).

#### `ThemingService`

Aplica/remova dinamicamente a classe do tema (`light-theme`,
`dark-theme`, etc.) no `<body>` ou `<html>`.

Exemplo de uso no Angular:

``` ts
constructor(private themingService: ThemingService) {}

toggleTheme(): void {
  this.themingService.setTheme('dark-theme');
}
```

Isso permite mudar de tema em tempo real sem recarregar a aplicação.

------------------------------------------------------------------------

## 🌗 Suporte a Múltiplos Temas

O projeto já suporta **tema claro** e **tema escuro**, além da
possibilidade de criar **temas customizados** (definindo novas variáveis
em `easy-theming.css` e registrando no `ThemeSelectorService`).

------------------------------------------------------------------------

## 📌 Conclusão

Este boilerplate fornece:

-   Base sólida para **theming Angular Material**.\
-   Suporte para **CSS custom properties**.\
-   Alternância dinâmica via **serviços Angular**.

Use-o como ponto de partida para criar aplicações com **identidade
visual única e suporte a múltiplos temas**.
