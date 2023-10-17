import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchingComponent } from './serching.component';

describe('SerchingComponent', () => {
  let component: SerchingComponent;
  let fixture: ComponentFixture<SerchingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerchingComponent]
    });
    fixture = TestBed.createComponent(SerchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
