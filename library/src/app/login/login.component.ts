import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy{


  constructor(private authService:AuthService){}
  ngOnDestroy(): void {
    console.log("Login Component Destroyed");
  }

  login(){
      this.authService.login()
  }
}
