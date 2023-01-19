import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { ConfiguracionesTabRoutingModule } from './configuraciones-tab-routing.module';
import { ConfiguracionesTabComponent } from './configuraciones-tab.component';



@NgModule({
  declarations: [ConfiguracionesTabComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConfiguracionesTabRoutingModule
  ]
})
export class ConfiguracionesTabModule { }
