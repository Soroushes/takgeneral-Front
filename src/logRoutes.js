import {logger} from "../logger";

const logRoutes = (route)=>{
  logger.info(` the page ${route} is called called Time : ${new Date().toLocaleDateString()} / ${new Date().toLocaleTimeString()}`)
}
export default logRoutes;