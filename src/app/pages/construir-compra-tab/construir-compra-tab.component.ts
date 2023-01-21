import { Component, OnInit } from '@angular/core';
import { ConstruirCompraService } from '../../services/construir-compra.service';
import { ICategory } from '../../model/ICategory';
import { IProducType } from '../../model/IProductType';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from '@ionic/angular';
import { ISearchConfig } from '../../model/ISearchConfig';
import { IMotorcycle } from '../../model/IMotorcycle';

@Component({
  selector: 'app-construir-compra-tab',
  templateUrl: './construir-compra-tab.component.html',
  styleUrls: ['./construir-compra-tab.component.scss'],
})
export class ConstruirCompraTabComponent implements OnInit {

  FIRST_STEP =1;
  SECOND_STEP_SPARE_PARTS = 2;
  THIRD_STEP_SPARE_PARTS = 3;
  FOUR_STEP_SPARE_PARTS = 4;
  ACTUA_STEP = this.FIRST_STEP;

  loading ;
  producTypes: IProducType[];
  motorcycleBrands: ISearchConfig[];
  motorcycles: IMotorcycle[]; 
  productCategories: ICategory[];

  constructor(
    private readonly construirCompraService: ConstruirCompraService,
    private sanitizer: DomSanitizer,
    private loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {
    await this.initLoader();
    await this.construirCompraService
      .getProductsTypes()
      .then((productstypes) => {
        this.producTypes = productstypes
      });
      this.loading.dismiss();
  }

  sanitizerUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  async clic(item: number, data: any = null): Promise<void> {
    switch (item) {
      case this.SECOND_STEP_SPARE_PARTS:
          await this.initLoader();
          this.ACTUA_STEP = this.SECOND_STEP_SPARE_PARTS;
          await this.construirCompraService
          .getMotorcicleBrands()
          .then((motorcycleBrands) => {
            this.motorcycleBrands = motorcycleBrands
          });
          this.loading.dismiss();
        break;

        case this.THIRD_STEP_SPARE_PARTS:
          await this.initLoader();
          this.ACTUA_STEP = this.THIRD_STEP_SPARE_PARTS;
          await this.construirCompraService
          .getMotorcicleByBrand(data)
          .then((motorcycles) => {
            this.motorcycles = motorcycles
            console.log(this.motorcycles);
          });
          this.loading.dismiss();
        break;

        case this.FOUR_STEP_SPARE_PARTS:
          await this.initLoader();
          this.ACTUA_STEP = this.FOUR_STEP_SPARE_PARTS;
          await this.construirCompraService
          .getTypeProducCategory(1)
          .then((productCategories) => {
            this.productCategories = productCategories

          });
          this.loading.dismiss();
        break;
    }
  }

  async initLoader() {
    this.loading = await this.loadingCtrl.create({
      message: 'Espera por favor',
      duration: 3000,
      cssClass: 'custom-loading',
    });
    this.loading.present();
  }

}

