import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFourthGenerationComponent } from './about-fourth-generation.component';

describe('AboutFourthGenerationComponent', () => {
  let component: AboutFourthGenerationComponent;
  let fixture: ComponentFixture<AboutFourthGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFourthGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFourthGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
