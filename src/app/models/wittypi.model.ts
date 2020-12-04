export class WittyPiSettings {

  constructor() {
    this.enabled = false;
    this.version = 2;
    this.dummyload = false;
    this.voltagecheck_enabled = false;
    this.low = new WittyPi();
    this.normal = new WittyPi();
  }
  enabled: boolean;
  version: number;
  dummyload: boolean;
  voltagecheck_enabled: boolean;
  low: WittyPi;
  normal: WittyPi;
}
export class WittyPi {

  constructor() {
    this.enabled = false;
    this.schedule = '';
  }

  enabled: boolean;
  schedule: string;
  voltage: number;
  shutdownAfterTransfer: boolean;
  interval: number;

}
