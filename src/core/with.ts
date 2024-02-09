import { matchObjType, voidCallback } from "../types/index"
import { equal } from "../utils/equal"


const withFn = (matchObj: matchObjType, pattern: any, callback: voidCallback): matchObjType => {
    if(!matchObj.matched  && equal(matchObj.value, pattern)){
        matchObj.matched = true
        callback();
    }

    return matchObj;   
}


export default withFn;