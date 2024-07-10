import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcourseComponent } from './allcourse.component';

describe('AllcourseComponent', () => {
  let component: AllcourseComponent;
  let fixture: ComponentFixture<AllcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcourseComponent]
    });
    fixture = TestBed.createComponent(AllcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
