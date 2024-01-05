import { Sensor } from './sensor.model';
import {InternetSettings} from './internet-settings.model';
import {WittyPiSettings} from './wittypi.model';
import {DisplaySettings} from "./display-settings.model";

export class Settings {

  constructor() {
    this.ts_channels = [];
    this.ts_channels.push(new Channel());
    this.sensors = [];
    this.internet = new InternetSettings();
    this.wittyPi = new WittyPiSettings();
    this.display = new DisplaySettings();
  }
  ts_channels: Channel[];
  ts_server_url?: string;
  interval: number;
  button_pin: number;
  led_pin: number;
  sensors: Sensor[];
  internet: InternetSettings;
  debug?: boolean; // replaced by debuglevel
  debuglevel: number;
  enable_reset: boolean;
  debuglevel_logfile: number;
  wittyPi: WittyPiSettings;
  w1gpio: number;
  offline: number;
  timeToStopMaintenance: number;
  display: DisplaySettings;
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


