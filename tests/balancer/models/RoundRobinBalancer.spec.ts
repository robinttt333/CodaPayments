import ILoadBalancer from "../../../src/balancer/models/interfaces/IBalancer";
import RoundRobinBalancer from "../../../src/balancer/models/RoundRobinBalancer";

describe("Tests for Round Robin based load balancer model", () => {
  let balancer: ILoadBalancer;
  beforeAll(() => {
    const ports = ["1", "2", "3"];
    const url = "http://abc.com";
    balancer = new RoundRobinBalancer(ports, url);
  });

  test("Balancer gives a valid url", () => {
    const address1 = balancer.getAddress();
    expect(address1).toEqual("http://abc.com:1");
  });

  test("Balancer gives the next url in round robin fashion", () => {
    const address2 = balancer.getAddress();
    const address3 = balancer.getAddress();
    expect(address2).toEqual("http://abc.com:2");
    expect(address3).toEqual("http://abc.com:3");
  });
});
