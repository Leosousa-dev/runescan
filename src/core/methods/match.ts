import {_with} from "./with";
import {outherWise} from "./default";
import {Match, MatchedContext, MatcherResult} from "../../types/methods"

const match: Match = (value: any): MatcherResult => {
   const context: MatchedContext = {hasMatched: false, value};
   return { with: _with.bind(null, context), outherWise: outherWise.bind(null, context)};
};

export {match}