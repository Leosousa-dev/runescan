export type matchObjType<T> = {
    matched: boolean,
    value: T,
    with: (value: T, pattern: T) => matchObjType<T>,
    otherwise: (value: T) => T
}

export type voidCallback = () => void