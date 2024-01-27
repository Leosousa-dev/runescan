import {_with} from "./with";
import {outherwise} from "./outherwise";
import {Match, MatcherResult} from "../types/methods";

const match: Match = (value: any): MatcherResult => ({
   with: _with (value),
   otherWise: outherwise,
})

export default match;