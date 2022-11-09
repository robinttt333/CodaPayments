import axios from "axios";
import { waitForDebugger } from "inspector";
import { wait } from "../utils/apiCallUtils";
/**
 * Method to handle POST calls to the service
 */
export const post = async (
  address: string,
  req: any,
  depth: number = 1
): Promise<any> => {
  let responseFromServer = null;
  try {
    responseFromServer = await axios.post(address, req);
    return responseFromServer;
  } catch (e) {
    if (depth > 5) throw e;
    await wait(2 ** depth);
    responseFromServer = await post(address, req, depth + 1);
    return responseFromServer;
  }
};
