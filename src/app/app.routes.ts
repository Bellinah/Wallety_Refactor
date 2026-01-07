import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Personal } from './Components/personal/personal';
import { Company } from './Components/company/company';
import { ContactUs } from './Components/contact-us/contact-us';
import { SignIn } from './Components/sign-in/sign-in';

export const routes: Routes = [
{path: '', redirectTo: 'Home', pathMatch: 'full' },
{path: "Home", component: Home},
{path: "Personal", component: Personal},
{path: "Company", component: Company},
{path: "Contact Us", component: ContactUs},
{path: "Sign In", component: SignIn}
];
