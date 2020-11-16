import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberParticipationsReadComponent } from './member-participations-read.component';

describe('MemberParticipationsReadComponent', () => {
  let component: MemberParticipationsReadComponent;
  let fixture: ComponentFixture<MemberParticipationsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberParticipationsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberParticipationsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
