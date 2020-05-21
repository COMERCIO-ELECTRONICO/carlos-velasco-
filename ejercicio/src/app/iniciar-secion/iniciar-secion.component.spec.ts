import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSecionComponent } from './iniciar-secion.component';

describe('IniciarSecionComponent', () => {
  let component: IniciarSecionComponent;
  let fixture: ComponentFixture<IniciarSecionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarSecionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
