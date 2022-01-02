import { AlertService } from './../services/alert.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  message = '';

  constructor(public service: AlertService) { }

}
