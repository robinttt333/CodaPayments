/**
 *  This is a custom method to mock exponential back-off waiting
 * @param ms Time in milliseconds
 * @returns
 */
export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
