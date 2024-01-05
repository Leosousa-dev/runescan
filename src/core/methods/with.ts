export const _with = (expected: any, value: any, fn: () => void) => {
   if(expected === value){
      fn()
   }
}
