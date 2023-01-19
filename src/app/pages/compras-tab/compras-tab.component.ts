import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-compras-tab',
  templateUrl: './compras-tab.component.html',
  styleUrls: ['./compras-tab.component.scss'],
})
export class ComprasTabComponent implements OnInit {

  constructor(
    private readonly authServiceService: AuthServiceService,
    private readonly router: Router,
    private loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {

  }

  async pasarComprador(): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento ',
      duration: 1500,
    });
    loading.present();
    await this.authServiceService.login('COMPRADOR');
    this.router.navigate(['tabs/ofertas']);
  }

}
