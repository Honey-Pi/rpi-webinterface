export class Sensor {
  constructor(type: number = 0) {
  }
  /*
  Type 0: DS18b20
  Type 1: BME680
  Type 2: HX711
   */

  type: number;
  name: string;
  ts_field: string;
  // Gewicht spezifisch:
  reference_unit: number;
  pin_dt: number;
  pin_sck: number;
  // BME680 spezifisch:
  ts_field_temperature: string;
  ts_field_humidity: string;
  ts_field_air_pressure: string;
  ts_field_air_quality: string;
  // DS18b20 spezifisch:
  device_id: string;
}
