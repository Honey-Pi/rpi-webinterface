import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'settings-gpio-field',
  templateUrl: './gpio-field.component.html',
  styleUrls: ['./gpio-field.component.css']
})
export class GpioFieldComponent implements OnInit {

  constructor() { }

  @Input() label = 'GPIO';
  @Input() field_id = 'w1gpio';
  @Input() field: any;
  @Output() fieldChanged = new EventEmitter<boolean>();
  @Input() required = false;
  @Input() disabled_pins: number[];

  onChange(event) {
    this.fieldChanged.emit(this.field);
  }

  ngOnInit() {
  }

}
