
export type MatcherFunction = (expected: any, callback: () => void) => MatcherResult;

export interface MatcherResult {
  with: MatcherFunction;
  outherWise: (callback: () => void) => void;
}

export type Match = (value: any) => MatcherResult;

export type MatchedContext = {
  hasMatched: boolean;
  value?: any;
};


export type voidFn = () => void