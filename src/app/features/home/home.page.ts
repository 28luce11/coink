import { Component } from '@angular/core';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  component = RegisterPage;
}
