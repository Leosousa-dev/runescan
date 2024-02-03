import withfn from "./with";

const match = (value: any) => ({
   with: (pattern: any, callback: ()=> void) => withfn(value, pattern, callback) ? match("") : match(value)
    
});

export default match;


