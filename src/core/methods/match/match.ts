import _with from "./with";
import _default from "./default";

const match = (value: any) => {
   let matched: boolean = false
   
   const api = {
      with: (expected: any, fn: () => void) => match(_with(expected,value, fn)),
      default: (fn: ()=> void) => _default(fn)
   }

   return api;
}

export default match;