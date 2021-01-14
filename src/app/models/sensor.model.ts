export class Sensor {
  constructor(type: number = 0) {
    this.offset = 0;
    this.reference_unit = 1;
  }
  /*
  Type 0: DS18b20
  Type 1: BME680
  Type 2: HX711
  Type 3: DHT11/DHT22
  Type 4: MAX6675/MAX31855
  Type 5: BME280
  Type 6: PCF8591
  Type 7: EE895
  Type 8: HDC1008
  Type 9: SHT31
  Type 10: AHT10
   */
  type: number;
  name: string;
  ts_field: string;
  // HX711
  reference_unit: number;
  channel: string;
  offset: number; // HX711, BME680, BME280 & MAX6675/MAX31855
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
  pin: number; // & MAX6775 & PCF8591
  dht_type: number;
  // MAX6675/MAX31855
  pin_cs: number;
  pin_clock: number;
  max_type: number;
  // PCF8591
  I2CVoltage: number;

}
