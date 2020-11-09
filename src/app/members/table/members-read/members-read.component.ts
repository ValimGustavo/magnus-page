import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MembersReadDataSource, MembersReadItem } from './members-read-datasource';
import { Router } from '@angular/router';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members-read-table',
  templateUrl: './members-read.component.html',
  styleUrls: ['./members-read.component.scss']
})
export class MembersReadComponentTable implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MembersReadItem>;
  dataSource: MembersReadDataSource;

  constructor(
    private router: Router,
    private memberService:MemberService
  
  ){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName'];

  ngOnInit() {
    this.dataSource = new MembersReadDataSource();
  }

  ngAfterViewInit() {

    this.memberService.read().subscribe(members => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = members;
    })
    
  }

  navigateTo(id:number){
      this.router.navigate(['/members/'+id])
  }
}
