import path from "path";
import dotenv from "dotenv";
import IBalancer from "./interfaces/Ibalancer";

const envPath = path.resolve(__dirname, "..", "..", ".env");
const config = dotenv.config({ path: envPath });
/**
 * Class to implement Round Robin balancer
 */
export default class RoundRobinBalancer implements IBalancer {
  static COLON = ":";
  current: number;
  ports: String[];

  constructor(ports: String[]) {
    this.ports = ports;
    this.current = 0;
  }

  getAddress(): string {
    const url = [config.parsed!.URL, this.ports[this.current]].join(
      RoundRobinBalancer.COLON
    );
    this.current = (this.current + 1) % this.ports.length;
    return url;
  }
}
