import { Request, Response } from "express";
import { postRequestController } from "../../../src/balancer/controllers/post.controller";
import * as service from "../../../src/balancer/services/apiCaller.service";

jest.mock("../../../src/balancer/services/apiCaller.service", () => ({
  post: jest.fn(),
}));
jest.mock("../../../src/balancer/index", () => ({
  balancer: {
    getAddress: jest.fn(),
  },
}));
const mockedPost = service.post as unknown as jest.Mock;

describe("Tests for POST controller", () => {
  let mockRequest = { body: { key: "value" } } as Request;
  let mockResponse = { send: jest.fn() } as unknown as Response;

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Post controller working", async () => {
    mockedPost.mockResolvedValue({ data: {} });
    const res = await postRequestController(mockRequest, mockResponse);
    expect(service.post as unknown as jest.Mock).toBeCalledTimes(1);
  });

  test("Post controller failing", async () => {
    const e = new Error("Something went wrong");
    mockedPost.mockRejectedValueOnce(e);
    try {
      const res = await postRequestController(mockRequest, mockResponse);
    } catch (e) {
      expect(e).toEqual(e);
    } finally {
      expect(service.post as unknown as jest.Mock).toBeCalledTimes(1);
    }
  });
});
