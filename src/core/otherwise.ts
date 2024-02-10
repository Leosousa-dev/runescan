import { matchObjType, voidCallback } from "../types/index"

const otherwise = (matchObj: matchObjType, callback: voidCallback) => {
    console.log("verifc macthed",matchObj.matched)
    if(!matchObj.matched){
        callback()
    }
}


export default otherwise;