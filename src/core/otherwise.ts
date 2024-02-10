import { matchObjType, voidCallback } from "../types/index"

const otherwise = (matchObj: matchObjType, callback: voidCallback) => {
    if(!matchObj.matched){
        callback()
    }
}


export default otherwise;