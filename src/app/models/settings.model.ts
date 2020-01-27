import { Sensor } from './sensor.model';
import {InternetSettings} from './internet-settings.model';

export class Settings {

  constructor() {
    this.ts_channels = [];
    this.ts_channels.push({ts_channel_id: undefined, ts_write_key: ''});
    this.sensors = [];
    this.internet = new InternetSettings();
  }
  ts_channels: {
    name?: string;
    ts_channel_id: number;
    ts_write_key: string;
  }[];
  ts_server_url: string;
  interval: number;
  button_pin: number;
  sensors: Sensor[];
  internet: InternetSettings;
  debug: boolean;
  shutdownAfterTransfer: boolean;
  wittyPi_enabled: boolean;
  wittyPi_script: string;
  w1gpio: number;
  offline: number;
}
