import { Request, Response } from "express";
import { postRequestController } from "../../../src/server/controllers/post.controller";

describe("Tests for POST controller", () => {
  let mockRequest = { body: { key: "value" } } as Request;
  let mockResponse = { send: jest.fn() } as unknown as Response;

  test("Post controller working", async () => {
    postRequestController(mockRequest, mockResponse);
    expect(mockResponse.send).toBeCalledTimes(1);
  });
});
