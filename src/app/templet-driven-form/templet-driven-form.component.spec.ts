import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletDrivenFormComponent } from './templet-driven-form.component';

describe('TempletDrivenFormComponent', () => {
  let component: TempletDrivenFormComponent;
  let fixture: ComponentFixture<TempletDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempletDrivenFormComponent]
    });
    fixture = TestBed.createComponent(TempletDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
