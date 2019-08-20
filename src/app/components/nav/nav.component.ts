import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() isLoggedIn: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onNav(link) {
    this.router.navigateByUrl(link);
  }
  onLogOut() {
    this.authService.logOut();
  }
}
