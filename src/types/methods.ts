
export type MatcherFunction = (expected: any, fn: () => void) => MatcherResult;

export interface MatcherResult {
  with: MatcherFunction;
  default: (fn: () => void) => void;
}

export type Match = (value: any) => MatcherResult;

export type MatchedContext = {
  matched: boolean;
  value?: any;
};


export type voidFn = () => void