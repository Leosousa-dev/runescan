
const match = (value: any) => ({
   with: (expected: any, fn: () => void) => {
      if(expected === value) fn();
      return match(value);
   },
   default: (fn: () => void) => fn(),
 });


 const test = match("dd")
 .with("dd", ()=> console.log("dd"))
 .with("dd", ()=> console.log("ok leo"))
 .default(() => console.log("defaul here"))