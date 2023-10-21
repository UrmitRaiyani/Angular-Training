import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedTempletDrivenFormComponent } from './nested-templet-driven-form.component';

describe('NestedTempletDrivenFormComponent', () => {
  let component: NestedTempletDrivenFormComponent;
  let fixture: ComponentFixture<NestedTempletDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedTempletDrivenFormComponent]
    });
    fixture = TestBed.createComponent(NestedTempletDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
