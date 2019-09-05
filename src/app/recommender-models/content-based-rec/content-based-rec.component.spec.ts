import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBasedRecComponent } from './content-based-rec.component';

describe('ContentBasedRecComponent', () => {
  let component: ContentBasedRecComponent;
  let fixture: ComponentFixture<ContentBasedRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBasedRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBasedRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
