
export class Rune{
   private value: number | string;
   private cases: Map<number | string, () => void> = new Map();
   private default: (() => void) | null = null;

   constructor(value: string | number){
     this.value = value;
   };

   with(expected: string , fn: () => void): this{
      this.cases.set(expected, fn);
      return this
   }

   defaultFn(fn: ()=> void): this{
      this.default = fn
      return this;
   }
   


};


