import { FormControl, FormControlDirective, FormControlName } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  @Input() alertType: string
  @Input() name: any

  @Input() conditions: {
    prop: string,
    message: string
  }[]
  ngOnInit(): void {
    
  }

}
