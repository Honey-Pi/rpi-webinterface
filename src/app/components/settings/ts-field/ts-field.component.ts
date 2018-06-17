import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'settings-ts-field',
  templateUrl: './ts-field.component.html',
  styleUrls: ['./ts-field.component.css']
})
export class TsFieldComponent implements OnInit {


  constructor() { }

  @Input() label: string;
  @Input() ts_field_id: string = "ts_field";
  @Input() ts_field: any;
  @Output() ts_fieldChanged = new EventEmitter<boolean>();

  onChange(){
    this.ts_fieldChanged.emit(this.ts_field);
  }

  ngOnInit() {
  }

}
