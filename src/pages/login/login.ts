import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { AuthService } from '../../providers/services/aut.service';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private auth: AuthService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
    
  }

  // Attempt to login in through our User service
  doLogin() { 
      let credential = {
        email : this.account.email,
        password: this.account.password
      }

      this.auth.signInWithEmail(credential).then(
        () => this.navCtrl.push(MainPage),
        error => {
          let toast = this.toastCtrl.create({
             message: this.loginErrorString,
             duration: 3000,
             position: 'top'
             });
            toast.present(); 
          }
      );
      
      // // Unable to log in
      //
  }
}

