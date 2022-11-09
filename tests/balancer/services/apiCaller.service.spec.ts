import { post } from "../../../src/balancer/services/apiCaller.service";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Tests for the api caller service", () => {
  describe("Tests for POST calls", () => {
    const address = "http://abc.com";
    const req = { key: "value" };

    beforeEach(() => {
      jest.resetAllMocks();
    });

    test("POST calls working fine", async () => {
      await post(address, req);
      expect(mockedAxios.post).toHaveBeenCalledWith(address, req);
    });

    test("POST calls throwing exception but recovering later", async () => {
      mockedAxios.post
        .mockRejectedValueOnce(new Error("Something went wrong"))
        .mockResolvedValue({});
      const res = await post(address, req);
      // expect(e.message).toEqual("Something went wrong");
      expect(axios.post).toHaveBeenCalledWith(address, req);
      expect(axios.post).toHaveBeenCalledTimes(2);
      expect(res).toEqual({});
    });

    test("POST calls throwing exception always", async () => {
      mockedAxios.post.mockRejectedValue(new Error("Something went wrong"));
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
