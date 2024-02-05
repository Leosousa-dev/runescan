import withfn from "./with";



const match = (value: any) => ({
   with: (pattern: any, callback: ()=> void) => withfn(value, pattern, callback) ? match("") : match(value),
   otherwise: (callback: ()=> void) => callback()
    
});

export default match;


