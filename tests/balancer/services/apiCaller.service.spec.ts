import { post } from "../../../src/balancer/services/apiCaller.service";
import axios from "axios";
import exp from "constants";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Tests for the api caller service", () => {
  describe("Tests for POST calls", () => {
    const address = "http://abc.com";
    const req = { key: "value" };

    test("POST calls working fine", async () => {
      await post(address, req);
      expect(mockedAxios.post).toHaveBeenCalledWith(address, req);
    });

    test("POST calls throwing exception", async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error("Something went wrong"));
      try {
        await post(address, req);
      } catch (e) {
        expect(e.message).toEqual("Something went wrong");
      } finally {
        expect(axios.post).toHaveBeenCalledWith(address, req);
      }
    });
  });
});
