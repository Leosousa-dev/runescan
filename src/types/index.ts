export type matchObjType = {
    matched: boolean,
    value: any,
    with: (value: any, pattern: any) => matchObjType,
    otherwise: (callback: any) => any
}

export type voidCallback = () => void