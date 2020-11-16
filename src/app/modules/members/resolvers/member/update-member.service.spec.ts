import { InfoMemberResolve } from './update-member.resolver';
import { TestBed } from '@angular/core/testing';


describe('UpdateMemberService', () => {
  let service: InfoMemberResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoMemberResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
