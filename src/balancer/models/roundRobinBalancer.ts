import IBalancer from "./interfaces/IBalancer";

/**
 * Class to implement Round Robin balancer
 */
export default class RoundRobinBalancer implements IBalancer {
  static COLON = ":";
  current: number;
  ports: String[];
  url: String;

  constructor(ports: String[], url: String) {
    this.ports = ports;
    this.current = 0;
    this.url = url;
  }

  getAddress(): string {
    const address = [this.url, this.ports[this.current]].join(
      RoundRobinBalancer.COLON
    );
    this.current = (this.current + 1) % this.ports.length;
    return address;
  }
}
