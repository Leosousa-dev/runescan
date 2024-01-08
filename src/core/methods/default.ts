import {MatchedContext, voidFn} from "../../types/methods";

const _default = (context: MatchedContext, fn: voidFn): void =>{
   if(!context.matched){
      fn();
   }
};

export {_default}
