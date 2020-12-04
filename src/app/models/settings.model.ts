import { Sensor } from './sensor.model';
import {InternetSettings} from './internet-settings.model';
import {WittyPiSettings} from './wittypi.model';

export class Settings {

  constructor() {
    this.ts_channels = [];
    this.ts_channels.push(new Channel());
    this.sensors = [];
    this.internet = new InternetSettings();
    this.wittyPi = new WittyPiSettings();
  }
  ts_channels: Channel[];
  ts_server_url?: string;
  interval: number;
  button_pin: number;
  led_pin: number;
  sensors: Sensor[];
  internet: InternetSettings;
  debug: boolean;
  wittyPi: WittyPiSettings;
  w1gpio: number;
  offline: number;
}

export class Channel {

  constructor() {
    this.ts_write_key = '';
    this.ts_channel_id = undefined;
  }

  name?: string;
  ts_channel_id: number;
  ts_write_key: string;
}


