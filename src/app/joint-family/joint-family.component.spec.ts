import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointFamilyComponent } from './joint-family.component';

describe('JointFamilyComponent', () => {
  let component: JointFamilyComponent;
  let fixture: ComponentFixture<JointFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
