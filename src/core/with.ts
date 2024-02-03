
const withfn = (value: any, pattern: any, callback: ()=> void): boolean=> {
      if(value === pattern){
         console.log("match: ", value, pattern)
         callback();
         return true;
      }
      console.log("different: ->\n ", value, pattern)
   return false;
};

export default withfn;
