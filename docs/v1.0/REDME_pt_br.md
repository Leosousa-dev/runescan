<div align="center">
   <h1>Runescan</h1>
   <strong>Runescan</strong> - Simplificando o Reconhecimento de Padrões


   <br>
   <img alt="example use" src="https://firebasestorage.googleapis.com/v0/b/useful-images.appspot.com/o/example.png?alt=media&token=9cb72224-af68-4467-a675-f9e6758d1eb6" width="500">
</div>
<br>
<div align="center">

<img alt="npm" src="https://img.shields.io/npm/v/runescan?style=for-the-badge">
<img alt="npm" src="https://img.shields.io/npm/dm/runescan?style=for-the-badge">

<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/Leosousa-dev/runes?style=for-the-badge&color=%239142D8">

</div>

### ✦ Documentação

A documentação está disponível em várias versões e linguagens. Escolha a versão e linguagem apropriadas para você:

- [Versão 1.0](docs/v1.0/README.md)
  - [Documentação em Inglês](../../README.md)
  - [Documentação em Português](./REDME_pt_br.md)

### ✦ Introdução
A biblioteca runescan visa simplificar a lógica condicional, permitindo que os desenvolvedores evitem estruturas excessivas de **if-else** e tornem o código mais legível e expressivo.

### ✦ Instalação

> Para realizar a instalação da lib e bem simples.
>

```bash
npm i runescan
```
Ou use o yarn caso preferir.

```bash
yarn add runescan
```
<br>


### ✦ Principais métodos
> falando um pouco sobre os principais métodos e o que cada um faz.

<br>

### `match()`:

Método utilizado para inicializar uma estrutura para realizar verificações de um valor. Ele espera um valor que pode ser do tipo string, number, bool.   

```javascript
  // importando a lib
  import {match} from "runescan";

  // usando o metodo match
  match(value)

```
---
### `with()`:

O método `with()` é utilizado para realizar verificações e executar ações com base no valor recebido. Ele espera dois argumentos:

**expected:**
>O valor com o qual deseja-se comparar o valor inicial fornecido ao método match(). Pode ser uma string, número, booleano, etc…

**callback:** 
> Uma função a ser executada se houver correspondência entre o valor inicial e o valor esperado. Esta função pode conter a lógica desejada para lidar com a correspondência.
---
### **`outherWise()`**:
O método outherWise como o nome ja sugere e um método padrão que sera executado caso não aja nehuma correspondência. Ele espera somente um argumento.

**callback:**

> Uma função a ser executada caso não houver nenhuma correspondência entre o valor inicial e os valores esperados
>

### ✦ exemplo de uso

**Problema: Autenticação de Usuários Baseada em Papéis**

Introdução:

>Imagine um sistema complexo de autenticação de usuários, onde diferentes usuários têm acesso a recursos específicos com base em seus papéis. Por exemplo, um usuário pode ser um administrador, um moderador ou um usuário padrão, cada um com diferentes permissões.

**Solução usando Runescan:**

```javascript

import { match } from "runescan";

// Exemplo de usuário e seu papel
const user = {  
   name: "John",  
   role: "admin", // Pode ser "admin", "moderator" ou "user"
};

// Utilizando Runescan para simplificar a lógica condicional

const accessLevel = match(user.role)
.with("admin", () => "Acesso total concedido")  
.with("moderator", () => "Acesso moderado concedido")  
.with("user", () => "Acesso limitado concedido")  
.outherWise(() => "Papel de usuário não reconhecido");

// Resultado
console.log(acessLevel);

```


### ✦ Contribuições
Estamos abertos a contribuições! Antes de começar, leia nossas [**diretrizes de contribuição**](../../CONTRIBUTING.md).