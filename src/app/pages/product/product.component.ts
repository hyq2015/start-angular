import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot, NavigationEnd,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public snapshot: ActivatedRouteSnapshot;

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

    // this.activeRoute.url.subscribe(res=>{
    //   console.log(res);
    // })
  }

}
