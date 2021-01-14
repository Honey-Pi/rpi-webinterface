
export class InternetSettings {
  constructor() {
    this.router = new Wifi();
    this.honeypi = new Wifi();
    this.modem = new Modem();
  }
  router: Wifi;
  honeypi: Wifi;
  modem: Modem;
}
export class Wifi {
  enabled?: boolean;
  ssid: string;
  password: string;
  wpa_type?: number;
}
export class Modem {
  enabled?: boolean;
  apn: string;
  ttyUSB: string;
}
