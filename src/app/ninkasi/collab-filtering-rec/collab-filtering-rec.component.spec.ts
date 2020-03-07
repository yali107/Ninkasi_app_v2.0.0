import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabFilteringRecComponent } from './collab-filtering-rec.component';

describe('CollabFilteringRecComponent', () => {
  let component: CollabFilteringRecComponent;
  let fixture: ComponentFixture<CollabFilteringRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabFilteringRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabFilteringRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
