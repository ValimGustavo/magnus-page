import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersReadComponent } from './members-read.component';

describe('MembersReadComponent', () => {
  let component: MembersReadComponent;
  let fixture: ComponentFixture<MembersReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
