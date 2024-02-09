export type matchObjType = {
    matched: boolean,
    value: any,
    with: (value: any, pattern: any) => matchObjType
}

export type voidCallback = () => void