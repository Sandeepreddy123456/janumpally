import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSecondGenerationComponent } from './about-second-generation.component';

describe('AboutSecondGenerationComponent', () => {
  let component: AboutSecondGenerationComponent;
  let fixture: ComponentFixture<AboutSecondGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSecondGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSecondGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
