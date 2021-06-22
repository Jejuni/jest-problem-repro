import { Component } from '@angular/core';
import { ServiceNamespace } from '../services';

@Component({
  selector: 'jest-problem-repro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // THIS WORKS DURING TESTING
  // constructor(service: MyService) {
  //   this.message = service.getMessage();
  // }

  constructor(service: ServiceNamespace.MyService) {
    this.message = service.getMessage();
  }
  title = 'jest-problem';
  message: string;
}
