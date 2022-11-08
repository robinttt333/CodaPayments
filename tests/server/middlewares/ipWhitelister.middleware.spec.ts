import ipWhiteLister from "../../../src/server/middlewares/ipWhitelister.middleware";
import { Request, Response, NextFunction } from "express";
import exp from "constants";

describe("Tests for IP Whitelister middleware", () => {
  let mockRequest = { socket: { remoteAddress: "::ffff:127.0.0.1" } };
  let mockResponse = {};
  let nextFunction: NextFunction = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Test for valid ip", () => {
    ipWhiteLister(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      nextFunction
    );
    expect(nextFunction).toHaveBeenCalledTimes(1);
  });

  test("Test for invalid ip", () => {
    let mockRequest = { socket: { remoteAddress: "123214" } };
    let mockResponse = {};
    ipWhiteLister(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      nextFunction
    );
    expect(nextFunction).toHaveBeenCalledTimes(1);
    expect(nextFunction).toHaveBeenCalledWith(new Error("Invalid IP: 123214"));
  });
});
