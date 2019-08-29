import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        let url: string = state.url;
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (sessionStorage.getItem('user')) {
                    resolve(true);
                    return;
                }
                this.authService.redirectUrl = url;
                if (!sessionStorage.getItem('currentPage') || sessionStorage.getItem('currentPage') !== '/login') {
                    this.router.navigateByUrl('login', {skipLocationChange: true});
                }
                resolve(false);
            },2000);
        });
    }
}
