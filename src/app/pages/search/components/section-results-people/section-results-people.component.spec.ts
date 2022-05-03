import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionResultsPeopleComponent } from './section-results-people.component';

describe('SectionResultsPeopleComponent', () => {
  let component: SectionResultsPeopleComponent;
  let fixture: ComponentFixture<SectionResultsPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionResultsPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionResultsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
