import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinkasiHeaderComponent } from './ninkasi-header.component';

describe('NinkasiHeaderComponent', () => {
  let component: NinkasiHeaderComponent;
  let fixture: ComponentFixture<NinkasiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinkasiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinkasiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
