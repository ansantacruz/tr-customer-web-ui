import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { ConstruirCompraTabComponent } from './construir-compra-tab.component';
import { ConstruirCompraTabRoutingModule } from './construir-compra-tab-routing.module';
import { CardModule } from '../../components/card/card.module';


@NgModule({
  declarations: [ConstruirCompraTabComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConstruirCompraTabRoutingModule,
    CardModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConstruirCompraTabModule { }
