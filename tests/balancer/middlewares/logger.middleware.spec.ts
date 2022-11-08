import { NextFunction, Request, Response } from "express";
import logger from "../../../src/balancer/middlewares/logger.middleware";

describe("Tests for the logging middleware", () => {
  test("Test logger working fine", () => {
    jest.spyOn(global.console, "log");
    let mockRequest = {};
    let mockResponse = {};
    let nextFunction: NextFunction = jest.fn();
    logger(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      nextFunction
    );
    expect(nextFunction).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
