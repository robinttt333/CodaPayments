import axios from "axios";

/**
 * Method to handler post calls to the service
 */
export const post = async (address: string, req: any) => {
  let responseFromServer = null;
  try {
    responseFromServer = await axios.post(address, req);
    return responseFromServer;
  } catch (e) {
    console.log("An error occurred while calling address: " + address);
    throw e;
  }
};
