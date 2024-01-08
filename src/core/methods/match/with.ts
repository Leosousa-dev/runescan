const _with = (expected: any, value: any, fn: () => void, matched: boolean) => {
   if(expected === value){
      matched = true;
      return fn()
   }
   return value;
}

export default _with;