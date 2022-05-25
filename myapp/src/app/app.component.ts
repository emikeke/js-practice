import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // can have multiple style files
})
export class AppComponent {
  title = 'myapp 123'; // binds data thru html file
  jsonValue = {
    a: 'hello',
    b: 'world',
  };

  newDate = new Date();

  constructor(private httpService: HttpService) {}

  handleEvent() {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1');
  }
}
