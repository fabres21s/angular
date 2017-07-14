import {Component, Input, OnChanges, SimpleChanges, OnInit, EventEmitter, Output} from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';


@Component({
  selector: 'input-date-validator',
  template: `

     <input type="text" placeholder="{{format}}" [value]="dateValue" (keyup)="onChange()"/>
  `
})

export class InputDateValidatorComponent implements OnInit {

  private inputFormControl:FormControl;
  
  @Input() listName: string;
  @Input() classes: string;
  @Input() format: string;
  @Input() reverse: boolean;

  @Output() onChanged = new EventEmitter();

  dateValue: string;


  constructor(private control: NgControl) {
    this.dateValue = '';
  }

  ngOnInit() {
     this.inputFormControl = this.control.control as FormControl;
  }

  onChange() {
    console.log(this.inputFormControl.value);
  }
}
