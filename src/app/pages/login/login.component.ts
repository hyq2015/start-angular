import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {LangService} from '../../service/lang.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private langService: LangService) { }

  ngOnInit() {
  }
  onLogin() {
    this.authService.login().subscribe(res => {
      console.log(this.authService.redirectUrl);
      this.router.navigateByUrl(this.authService.redirectUrl, {skipLocationChange: true});
      this.authService.redirectUrl = '';
    })
  }

}
