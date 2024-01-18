import {MatchedContext, voidFn} from "../../types/methods";

const outherWise = (context: MatchedContext, callback: voidFn): void =>{
   if(!context.hasMatched){
      callback();
   }
};

export {outherWise}
