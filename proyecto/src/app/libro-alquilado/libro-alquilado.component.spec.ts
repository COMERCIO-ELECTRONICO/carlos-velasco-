import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroAlquiladoComponent } from './libro-alquilado.component';

describe('LibroAlquiladoComponent', () => {
  let component: LibroAlquiladoComponent;
  let fixture: ComponentFixture<LibroAlquiladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroAlquiladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroAlquiladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
