import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSearchPeopleComponent } from './bar-search-people.component';

describe('BarSearchPeopleComponent', () => {
  let component: BarSearchPeopleComponent;
  let fixture: ComponentFixture<BarSearchPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarSearchPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSearchPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
