
const withfn = (value: any, pattern: any, callback: ()=> void) => {
      if(value === pattern){
         return true;
      }
   return false;
};

export default withfn;