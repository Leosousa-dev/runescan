import createMatchObj from "../utils/matcheObj";


const match = (value: any) => {
   const matcheObj =  createMatchObj(value);

   const methods = {
      with: matcheObj.with
   };


   return methods;
}

