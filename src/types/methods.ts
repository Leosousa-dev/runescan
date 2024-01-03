export type matchType = {
   with: (expected: any, fn: () => void) => matchType;
   default: (fn: () => void) => void;
};