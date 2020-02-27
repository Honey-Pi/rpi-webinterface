
export class InternetSettings {
  constructor() {
    this.router = new Wifi();
    this.honeypi = new Wifi();
  }
  router: Wifi;
  honeypi: Wifi;
}
export class Wifi {
  enabled?: boolean;
  ssid: string;
  password: string;
}
