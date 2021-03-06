import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'september-app';
  isLoggedIn = this.authService.isLoggedIn;
  constructor(private activeRoute: ActivatedRoute,private router: Router, private authService: AuthService) {

  }
  ngOnInit(): void {
    this.authService.loginStateChange.subscribe({
      next: res => {
        this.isLoggedIn = res;
      }
    });
  }
  onLogOut() {
    this.authService.logOut();
  }
}
