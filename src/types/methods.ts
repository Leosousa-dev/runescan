
export type MatcherFunction = (expected: any, callback: () => void) => MatcherResult;

export interface MatcherResult {
  with: MatcherFunction;
  otherWise: (callback: () => void) => void;
}

export type Match = (value: any) => MatcherResult;

export type voidFn = () => void