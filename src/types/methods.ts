export type match<T> = {
   with: (expected: T, fn: () => void) => match<T>;
};