export type matchType = {
   with: _with;
   default: _default;
};

export type _with = (expected: any, fn: () => void) => matchType;

export type _default = (fn: () => void) => void
