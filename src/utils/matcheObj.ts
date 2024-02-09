import withFn from "../core/with";
import { matchObjType } from "../types/index";

const createMatchObj = (value: any): matchObjType => {
    let matched: boolean = false;

    const matchObj = {
        value,
        matched,
        with: (value: any, pattern: any): matchObjType => withFn(matchObj ,value, pattern )
    }

    return matchObj;
}

export default createMatchObj;