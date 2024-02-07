import withfn from "./with";



const match = (value: any) => ({
   with: (pattern: any, callback: ()=> void) => withfn(value, pattern, callback),
   otherwise: (callback: ()=> void) => callback()
    
});

export default match;


