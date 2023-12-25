
export class Rune{
   private value: number | string;
   private cases: Map<number | string, () => void> = new Map();
   private default: (() => {}) | null = null;

   constructor(value: string | number){
     this.value = value;
   };

 


};


