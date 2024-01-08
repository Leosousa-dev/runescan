const _default = (fn: () => void, matched: boolean) => {

   if(matched){
      console.log("matched true");
      fn()
   }
   return;
}

export default _default;