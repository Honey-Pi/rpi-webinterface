import { Sensor } from "./sensor.model";

export class Settings {

  constructor() {
    this.sensoren = new Array<Sensor>();
  }
  tsChannelId: number;
  tsReadKey: string;
  tsWriteKey: string;
  simApn: string;
  simTime: number;
  set_reference_unit: number;
  sensoren: Sensor[];
}
