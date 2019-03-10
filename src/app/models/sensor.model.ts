export class Sensor {
  constructor(type: number = 0) {
  }
  /*
  Type 0: DS18b20
  Type 1: BME680
  Type 2: HX711
  Type 3: DHT11/DHT22
  Type 4: MAX6675/MAX31855
   */

  type: number;
  name: string;
  ts_field: string;
  // HX711
  reference_unit: number;
  channel: string;
  offset: number; // & MAX6675
  pin_dt: number;
  pin_sck: number;
  invert: boolean;
  compensation: boolean;
  compensation_value: number;
  compensation_temp: number;
  // BME680
  ts_field_air_pressure: string;
  ts_field_air_quality: string;
  // BME680 & DHT11
  ts_field_temperature: string;
  ts_field_humidity: string;
  // DS18b20
  device_id: string;
  // DHT22/DHT11
  pin: number; // & MAX6775
  dht_type: number;
  // MAX6675/MAX31855
  pin_cs: number;
  pin_clock: number;
  max_type: number;

}
