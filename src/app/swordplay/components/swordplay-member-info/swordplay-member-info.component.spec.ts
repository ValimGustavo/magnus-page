import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordplayMemberInfoComponent } from './swordplay-member-info.component';

describe('SwordplayMemberInfoComponent', () => {
  let component: SwordplayMemberInfoComponent;
  let fixture: ComponentFixture<SwordplayMemberInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwordplayMemberInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwordplayMemberInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
