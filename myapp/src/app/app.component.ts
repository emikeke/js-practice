import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // can have multiple style files
})
export class AppComponent {
  title = 'myapp 123'; // binds data thru html file

  userObject = {
    name: 'john',
    age: '21',
    id: 0,
  };

  newDate = new Date();

  constructor(private httpService: HttpService) {}

  handleEvent(event: any) {
    console.log(event);
  }
}
