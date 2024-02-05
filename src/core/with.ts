
const withfn = (value: any, pattern: any, callback: ()=> void): boolean=> {
      let matched: boolean = false;

      if(!matched && value === pattern){
         matched = true;
         callback();
         return true;
      }
      console.log("different: ->\n ", value, pattern)
   return false;
};

export default withfn;
