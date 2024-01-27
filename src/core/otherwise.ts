import {voidFn} from "../types/methods";

const otherwise = (callback: voidFn): void => {
   callback();
};

export default otherwise;