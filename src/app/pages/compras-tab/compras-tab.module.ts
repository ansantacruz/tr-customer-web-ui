import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { ComprasTabRoutingModule } from './compras-tab-routing.module';
import { ComprasTabComponent } from './compras-tab.component';



@NgModule({
  declarations: [ComprasTabComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ComprasTabRoutingModule
  ]
})
export class ComprasTabModule { }
