import {MatchedContext, voidFn} from "../../types/methods";

const outherwise = (context: MatchedContext, callback: voidFn): void =>{
   if(!context.hasMatched){
      callback();
   }
};

export {outherwise};
