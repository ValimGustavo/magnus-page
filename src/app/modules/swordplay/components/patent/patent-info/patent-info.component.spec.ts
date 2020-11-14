import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentInfoComponent } from './patent-info.component';

describe('PatentInfoComponent', () => {
  let component: PatentInfoComponent;
  let fixture: ComponentFixture<PatentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
