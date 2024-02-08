type callbackVoid = () => void
type otherwise = (value: any) => any


const isEqual = (value: any, pattern: any): boolean => value === pattern;


const match = (value: any) => {
   let macthed: boolean = false;


   const api = {
      with: (pattern: any, callback: callbackVoid) => {
         if(!macthed && isEqual(value, pattern)){
            callback()
            macthed = true;
         }

         return api;
      },

      otherwise: (callback: otherwise) => callback(value)
   }


   return api;
}


export default match;