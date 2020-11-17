import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOfferedCreateComponent } from './activity-offered-create.component';

describe('ActivityOfferedCreateComponent', () => {
  let component: ActivityOfferedCreateComponent;
  let fixture: ComponentFixture<ActivityOfferedCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityOfferedCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityOfferedCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
