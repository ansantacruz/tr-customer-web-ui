import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { OfertasTabComponent } from './ofertas-tab.component';
import { OfertasTabRoutingModule } from './ofertas-tab-routing.module';
import { CardModule } from '../../components/card/card.module';
import { HeaderModule } from '../../components/header/header.module';
import { TagModule } from '../../components/tag/tag.module';



@NgModule({
  declarations: [OfertasTabComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OfertasTabRoutingModule,
    CardModule,
    HeaderModule,
    TagModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OfertasTabModule { }
