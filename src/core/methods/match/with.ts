const _with = (expected: any, value: any, fn: () => void) => {
   if(expected === value){
      return fn()
   }
   return value;
}

export default _with;