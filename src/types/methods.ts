type Fn = () => void

type Matche<T> = (expected: T, fn: Fn) => MatcheResu<T>;

interface MatcheResu<T> {
   with: Matche<T>;
   default: (fn: Fn) => void;
}
