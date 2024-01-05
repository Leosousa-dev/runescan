import {_with} from "./with"

const match = (value: any) => {
   let matched: boolean = false
   
   const api = {
      with: (expected: any, fn: () => void) => match(_with(expected,value, fn))
   }

   return api;
}
