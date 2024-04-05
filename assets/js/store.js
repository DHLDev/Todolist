import { CreatStore } from "./core.js";
import reducer from "./reducer.js";
import logger from "./logger.js";

const {attach,connect,dispatch} = CreatStore(logger(reducer));
window.dispatch = dispatch;
export {
      attach,
      connect
}