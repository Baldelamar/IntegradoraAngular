import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuestNavbarComponent } from "./shared/components/navbar/guest-navbar/guest-navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GuestNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Roomio';
}
