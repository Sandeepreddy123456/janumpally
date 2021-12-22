import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFirstGenerationComponent } from './about-first-generation.component';

describe('AboutFirstGenerationComponent', () => {
  let component: AboutFirstGenerationComponent;
  let fixture: ComponentFixture<AboutFirstGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFirstGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFirstGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
