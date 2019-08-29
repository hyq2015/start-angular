import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, RouteConfigLoadEnd, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {LangService} from '../../service/lang.service';
import {PATH} from '../../common/router-path-constants';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    skipLocationChange = true;
    PATH = PATH;
    activeLink: string;
    @Input() isLoggedIn: boolean;

    constructor(private router: Router, private state: ActivatedRoute, private authService: AuthService, private langService: LangService) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.url.substr(0, 1) === '/') {
                    this.activeLink = event.url.substring(1);
                } else {
                    this.activeLink = event.url;
                }
                sessionStorage.setItem('currentPage', event.url);
            }
        })
    }

    ngOnInit() {
        console.log('init=========================');
        const url = sessionStorage.getItem('currentPage');
        if (url) {
            this.router.navigateByUrl(sessionStorage.getItem('currentPage'), {skipLocationChange: true})
        }
    }

    onNavigate(link) {
        this.router.navigateByUrl(link, {skipLocationChange: true});
    }

    onLogOut() {
        this.authService.logOut();
    }
}
