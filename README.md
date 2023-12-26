<div align="center">
   <h1>Rune</h1>
   <strong>Runes</strong> - Simplificando o Reconhecimento de Padrões
</div>


### ✦ Introdução
A biblioteca rune visa simplificar a lógica condicional, permitindo que os desenvolvedores evitem estruturas excessivas de **if-else** e tornem o código mais legível e conciso.

### ✦ Principais métodos
> falando um pouco sobre os principais métodos e o que 
cada um faz.

**`match()`:**

Método utilizado para inicializar uma estrutura para realizar verificações de um valor.

```javascript
   const pattern = Rune()

   pattern.match(value)(
      // faça suas verificações aqui
   )
```

**`with()`**:

Método utilizado para fazer verificações e realizar ações com base no valor recebido.

```javascript
// fazendo uso do método .with

  pattern.match(value)
     .with(10, () => {
         console.log("ok")
     })
     .with(0, () => {
         console.log("ok")
     })
     .default((value) => {
     console.log(`value: ${value} not falid`)
  })
```

