import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './Components/home/home';
import { Personal } from './Components/personal/personal';
import { Company } from './Components/company/company';
import { ContactUs } from './Components/contact-us/contact-us';
import { SignIn } from './Components/sign-in/sign-in';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Wallety';
}
