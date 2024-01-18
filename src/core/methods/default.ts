import {MatchedContext, voidFn} from "../../types/methods";

const outherWise = (context: MatchedContext, fn: voidFn): void =>{
   if(!context.hasMatched){
      fn();
   }
};

export {outherWise}
