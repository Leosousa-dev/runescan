import otherwise from "./otherwise";
import {voidFn} from "../types/methods";

const _with = (value: any) => (expected: any, callback: voidFn): void => {
   if(value === expected){
      callback();
   }else{
      otherwise(callback);
   }

}

export default _with;