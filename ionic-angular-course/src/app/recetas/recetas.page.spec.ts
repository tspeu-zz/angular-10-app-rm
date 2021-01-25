import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecetasPage } from './recetas.page';

describe('RecetasPage', () => {
  let component: RecetasPage;
  let fixture: ComponentFixture<RecetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
