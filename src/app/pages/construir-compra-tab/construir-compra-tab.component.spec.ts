import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConstruirCompraTabComponent } from './construir-compra-tab.component';

describe('ConstruirCompraTabComponent', () => {
  let component: ConstruirCompraTabComponent;
  let fixture: ComponentFixture<ConstruirCompraTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstruirCompraTabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConstruirCompraTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
