import { Sensor } from "./sensor.model";

export class Settings {

  constructor() {
    this.sensors = new Array<Sensor>();
  }
  ts_channel_id: number;
  ts_write_key: string;
  sim_apn: string;
  interval: number;
  button_pin: number;
  sensors: Sensor[];
}
