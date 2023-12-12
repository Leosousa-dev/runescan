import { rule } from "../types/types";

export class Rune{
   private rules: rule | rule[];

   constructor(rules: rule | rule[]){
      this.rules = rules;
   }

   process(input: Array<string>): void{
      let index: number = 0;

      while(input.length > index){
         let cursor = input[index];

         console.log(cursor)
         index++
      }     

   }

}