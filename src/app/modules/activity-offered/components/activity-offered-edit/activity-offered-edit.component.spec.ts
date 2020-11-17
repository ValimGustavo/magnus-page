import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOfferedEditComponent } from './activity-offered-edit.component';

describe('ActivityOfferedEditComponent', () => {
  let component: ActivityOfferedEditComponent;
  let fixture: ComponentFixture<ActivityOfferedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityOfferedEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityOfferedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
