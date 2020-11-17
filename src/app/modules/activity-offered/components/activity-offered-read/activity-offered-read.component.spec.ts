import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOfferedReadComponent } from './activity-offered-read.component';

describe('ActivityOfferedReadComponent', () => {
  let component: ActivityOfferedReadComponent;
  let fixture: ComponentFixture<ActivityOfferedReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityOfferedReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityOfferedReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
