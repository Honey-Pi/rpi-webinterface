export class Sensor {
  constructor(  type: number = 0,
                tsField: string = "field1",
                time: number = 1,
                pin: string = "4") {
    this.type = type;
    this.tsField = tsField;
    this.time = time;
    this.pin = pin;
  }

  type: number;
  tsField: string;
  time: number;
  pin: string;
}
