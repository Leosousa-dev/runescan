import {_with} from "./with";
import {_default} from "./default";
import {Match, MatchedContext, MatcherResult} from "../../types/methods"

const match: Match = (value: any): MatcherResult => {
   const context: MatchedContext = {matched: false, value};
   return { with: _with.bind(null, context), default: _default.bind(null, context)};
};

export {match}