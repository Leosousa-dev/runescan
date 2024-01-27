import {MatchedContext, MatcherResult, voidFn} from "../types/methods";
import {outherwise} from "./outherwise";

const _with = (context: MatchedContext, expected: any, callback: voidFn ): MatcherResult => {

   if(context.hasMatched){
      return { with: _with.bind(null, context), outherWise: outherwise.bind(null, context) };
   }

   if(expected === context.value){
      callback()
      context.hasMatched = true;
   
   }
   return {with: _with.bind(null, context), outherWise: outherwise.bind(null, context)};
};

export {_with};