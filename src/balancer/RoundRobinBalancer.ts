import path from "path";
import dotenv from "dotenv";

const envPath = path.resolve(__dirname, "..", "..", ".env");
const config = dotenv.config({ path: envPath });
/**
 * Class to implement Round Robin balancer
 */
export default class RoundRobinBalancer {
  static COLON = ":";
  current: number;
  ports: String[];

  constructor(ports: String[]) {
    this.ports = ports;
    this.current = 0;
  }

  getURL() {
    const url = [config.parsed!.URL, this.ports[this.current]].join(
      RoundRobinBalancer.COLON
    );
    this.current += 1;
    return url;
  }
}
