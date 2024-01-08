import match from "./core/methods/match/match";

export {match};


match("leo")
.with("leo1", ()=> console.log("ok1"))
.with("leo2", ()=> console.log("ok2"))
.with("leo", ()=> console.log("ok correct"))
.default(()=> console.log("default fn")) 