import otherwise from "./otherwise";
import _with from "./with";

import {Match, MatcherResult} from "../types/methods";

const match: Match = (value: any): MatcherResult => ({
   with: _with (value),
   otherWise: otherwise,
})

export default match;