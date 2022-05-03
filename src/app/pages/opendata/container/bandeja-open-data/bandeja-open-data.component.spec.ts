import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaOpenDataComponent } from './bandeja-open-data.component';

describe('BandejaOpenDataComponent', () => {
  let component: BandejaOpenDataComponent;
  let fixture: ComponentFixture<BandejaOpenDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaOpenDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaOpenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
