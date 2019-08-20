import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'september-app';
  isLoggedIn = this.authService.isLoggedIn;
  constructor(private router: Router, private authService: AuthService) {

  }
  ngOnInit(): void {
    this.authService.loginStateChange.subscribe({
      next: res => {
        this.isLoggedIn = res;
      }
    })
  }
  onNav(link) {
    this.router.navigateByUrl(link);
  }
  onLogOut() {
    this.authService.logOut();
  }
}
