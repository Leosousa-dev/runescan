import {_with} from "./with";
import {outherwise} from "./outherwise";
import {Match, MatchedContext, MatcherResult} from "../../types/methods"

const match: Match = (value: any): MatcherResult => {
   const context: MatchedContext = {hasMatched: false, value};
   return { with: _with.bind(null, context), outherWise: outherwise.bind(null, context)};
};

export {match}