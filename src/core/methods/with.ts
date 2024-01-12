import {MatchedContext, MatcherResult, voidFn} from "../../types/methods"
import {_default} from "./default"

const _with = (context: MatchedContext, expected: any, fn: voidFn ): MatcherResult => {

   if(context.matched){
      return { with: _with.bind(null, context), default: _default.bind(null, context) };
   }

   if(expected === context.value){
      fn()
      context.matched = true;
   
   }
   return {with: _with.bind(null, context), default: _default.bind(null, context)};
}

export {_with}