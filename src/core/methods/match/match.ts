import _with from "./with";
import _default from "./default";

const match = (value: any) => {
   let matched: boolean = false
   
   const api = {
      with: (expected: any, fn: () => void) => match(_with(expected,value, fn, matched)),
      default: (fn: ()=> void) => _default(fn, matched)
   }

   return api;
}

export default match;