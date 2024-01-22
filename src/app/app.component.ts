import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  email: string = '';
  subject: string = '';
  message: string ='';

  isEmailErr : boolean= false;

  formSubmit(){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!this.email.match(validRegex)){
      this.isEmailErr = true
    }
  }
}
