import {logger} from "../logger";
import {timeStampToDate} from "@/hooks/timeStampToDate";

const logApi = (route)=>{
logger.info(`the API : ${route} is called Time : ${new Date().toLocaleDateString()} / ${new Date().toLocaleTimeString()}`)
}
export default logApi;