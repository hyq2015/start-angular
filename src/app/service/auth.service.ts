import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  isLoggedIn = false;
  loginStateChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  redirectUrl: string;
  constructor(private router: Router) {
    if (sessionStorage.getItem('user')) {
      this.loginStateChange.next(true)
    } else {
      this.loginStateChange.next(false)
    }
  }
  login() : Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        sessionStorage.setItem('user', 'test');
        this.isLoggedIn = true;
        this.loginStateChange.next(true)
      })
    );
  }
  logOut(): void {
    sessionStorage.removeItem('user');
    this.isLoggedIn = false;
    this.loginStateChange.next(false);
    this.router.navigateByUrl('login', {skipLocationChange: true});
  }
}
