import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SworplayMembersReadComponent } from './sworplay-members-read.component';

describe('SworplayMembersReadComponent', () => {
  let component: SworplayMembersReadComponent;
  let fixture: ComponentFixture<SworplayMembersReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SworplayMembersReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SworplayMembersReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
