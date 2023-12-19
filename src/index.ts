import { rule } from "../types/types.d";

export class Rune{
   private rules: rule[];

   constructor(rules: rule[]){
      this.rules = rules
   }

   process(input: string | string[]): void{
      let index: number = 0;
      
      if(Array.isArray(input)){
         for(const rule of this.rules){
            this.apply(input, rule)
         }
      }
      else{
         for(const rule of this.rules){
             if(rule.pattern.test(input)){
               if(rule.action){
                  rule.action()
               }
             }
         }
      }

   }

   private apply(input: string[], rules: rule): void{
      for(const i of input){
         if(rules.pattern.test(i)){
            if(rules.action){
               rules.action()
            }
         }
      }
   }

};

export { rule };





      // if(Array.isArray(this.rules)){
      //    for(const rule of this.rules){
      //       this.apply(input, rule)
      //    }
      // }
   // }
   // private apply(input: string[], rules: rule): void{
   //    for(const i of input){
   //       if(rules.pattern.test(i)){
   //          if(rules.action){
   //             rules.action();
   //          }
   //       };
   //    };
   // };