import match from "./core/match";



match("dan")
   .with("leo", ()=> console.log("ok"))
   .with("dan", ()=> console.log("dan here"))
   .with("leo", ()=> console.log("ok"))

