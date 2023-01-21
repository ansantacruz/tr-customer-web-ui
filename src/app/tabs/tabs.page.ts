import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthServiceService } from 'src/services/auth-service.service';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy  {

  ROL:string;
  subscription: Subscription;
  constructor(
    private readonly authServiceService: AuthServiceService,
    private readonly router: Router
  ) {}


  ngOnInit() {
    this.subscription = this.authServiceService.ROL.subscribe((ROL) => {
      this.ROL = ROL
      console.log(this.ROL)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClick(page: string) {
    this.router.navigate([`/${page}`])
  }
}
