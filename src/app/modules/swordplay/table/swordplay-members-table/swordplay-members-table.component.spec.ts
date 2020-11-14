import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { SwordplayMembersTableComponent } from './swordplay-members-table.component';

describe('SwordplayMembersTableComponent', () => {
  let component: SwordplayMembersTableComponent;
  let fixture: ComponentFixture<SwordplayMembersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwordplayMembersTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwordplayMembersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
