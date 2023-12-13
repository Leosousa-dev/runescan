import { rule } from "../types/types.d";

export class Rune{
   private rules: rule | rule[];

   constructor(rules: rule | rule[]){
      this.rules = rules;
   }

   process(input: string[]): void{
      let index: number = 0;
      
      if(Array.isArray(this.rules)){
         for(const rule of this.rules){
            this.apply(input, rule)
         }
      }
   }
   private apply(input: string[], rules: rule): void{
      for(const i of input){
         if(rules.pattern.test(i)){
            console.log(`Match found for rule: ${rules.pattern.source} with input: ${i}`);
         }
      }
   }
}

export { rule };
