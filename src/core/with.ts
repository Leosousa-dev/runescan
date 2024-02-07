import match from "./match";

const withfn = (value: any, pattern: any, callback: ()=> void): any=> {
      let matched: boolean = false;

      if(!matched && value === pattern){
         matched = true;
         callback();
         return {with: (pattern: any, callback: ()=> void) => withfn(value, pattern, callback), otherwise: (callback: ()=> void) => callback}
      }
   console.log("different: ->\n ", value, pattern)
   return match(value)
};

export default withfn;
