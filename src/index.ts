// Função match que retorna outras funções (with e default)
const match = (value: any) => ({
   with: (pattern: any, fn: any) => (pattern === value ? fn(value) : match(value)),
   default: (fn: any) => fn(value),
 });
 
 // Exemplo de uso
 const result = match(3)
   .with(1, () => "One matched")
   .with(2, () => "Two matched")
   .default(() => "No match");
 
 console.log(result);
 