import otherwise from "../core/otherwise";
import withFn from "../core/with";
import { matchObjType, voidCallback } from "../types/index";

const createMatchObj = (value: any): matchObjType => {
    let matched: boolean = false;

    const matchObj = {
        value,
        matched,
        with: (value: any, pattern: any): matchObjType => withFn(matchObj ,value, pattern ),
        otherwise: (callback: voidCallback) => otherwise(matchObj ,callback)
    }

    return matchObj;
}

export default createMatchObj;