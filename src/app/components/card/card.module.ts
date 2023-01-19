import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
  ],
  exports: [CardComponent]
})
export class CardModule { }
