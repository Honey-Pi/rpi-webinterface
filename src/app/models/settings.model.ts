import { Sensor } from "./sensor.model";
import {InternetSettings} from "./internet-settings.model";

export class Settings {

  constructor() {
    this.sensors = [];
    this.internet = new InternetSettings();
  }
  ts_channel_id: number;
  ts_write_key: string;
  ts_server_url: string;
  interval: number;
  button_pin: number;
  sensors: Sensor[];
  internet: InternetSettings;
}
