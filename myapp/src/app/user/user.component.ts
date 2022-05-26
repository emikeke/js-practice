import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface UserInterface {
  name: string;
  age: string;
  id: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: UserInterface;

  @Output() userEvent: EventEmitter<UserInterface>; // line 30 in app.component.html

  isColored: boolean;

  constructor() {
    this.userEvent = new EventEmitter<UserInterface>();
    this.user = {} as UserInterface;
    this.isColored = true;
  }

  ngOnInit(): void {
    // runs this code when component gets initialized
  }

  sendUserEvent(): void {
    this.userEvent.emit(this.user);
  }
}
