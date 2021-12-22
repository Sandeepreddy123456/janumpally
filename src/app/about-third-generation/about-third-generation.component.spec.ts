import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThirdGenerationComponent } from './about-third-generation.component';

describe('AboutThirdGenerationComponent', () => {
  let component: AboutThirdGenerationComponent;
  let fixture: ComponentFixture<AboutThirdGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutThirdGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutThirdGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
