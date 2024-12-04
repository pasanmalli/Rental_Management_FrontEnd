import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewComponent } from './page/view/view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,RegisterComponent,ViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reg';
}
