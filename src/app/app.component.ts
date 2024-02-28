import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TodoListComponent, RouterOutlet, NavbarComponent],
})
export class AppComponent {}
