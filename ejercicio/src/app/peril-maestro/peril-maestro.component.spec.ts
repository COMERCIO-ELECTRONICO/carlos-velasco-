import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerilMaestroComponent } from './peril-maestro.component';

describe('PerilMaestroComponent', () => {
  let component: PerilMaestroComponent;
  let fixture: ComponentFixture<PerilMaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerilMaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerilMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
