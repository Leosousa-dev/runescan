const _default = (fn: () => void, matched: boolean) => {

   if(matched === false){
      fn()
   }
   return;
}

export default _default;