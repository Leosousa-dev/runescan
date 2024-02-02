import withfn from "./with";

const match = (value: any) => ({
   with: (pattern: any, callback: ()=> void) => {
      const result = withfn(value, pattern, callback)
      return result  ? match(result) : match(value)
   }
});

export default match;


