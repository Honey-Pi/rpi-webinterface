import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'settings-ts-field',
  templateUrl: './ts-field.component.html',
  styleUrls: ['./ts-field.component.css']
})
export class TsFieldComponent implements OnInit {


  constructor() { }

  @Input() label: string;
  @Input() ts_field_id = 'ts_field';
  @Input() ts_field: any;
  @Output() ts_fieldChanged = new EventEmitter<boolean>();
  @Input() required = false;
  @Input() channels: any[];

  onChange(event) {
    this.ts_fieldChanged.emit(this.ts_field);
    console.log('Selected Field: ' + this.ts_field);
  }

  ngOnInit() {
  }

}
