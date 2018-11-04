import {Wifi} from "./wifi.model";

export class InternetSettings {
  constructor() {
    this.router = new Wifi();
    this.honeypi = new Wifi();
  }
  router: Wifi;
  honeypi: Wifi;
}
