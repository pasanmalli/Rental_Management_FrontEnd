import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewComponent } from './page/view/view.component';
import { AddItemComponent } from './page/add-item/add-item.component';
import { ViewItemComponent } from './page/view-item/view-item.component';
import { AddRentalItemsComponent } from './page/add-rental-items/add-rental-items.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,RegisterComponent,ViewComponent,AddItemComponent,ViewItemComponent,AddRentalItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reg';
}
