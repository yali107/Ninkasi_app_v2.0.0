import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinkasiComponent } from './ninkasi.component';

describe('NinkasiComponent', () => {
  let component: NinkasiComponent;
  let fixture: ComponentFixture<NinkasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinkasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinkasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
