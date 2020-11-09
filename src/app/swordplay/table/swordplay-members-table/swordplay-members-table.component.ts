import { SwordplayService } from './../../services/swordplay.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  SwordplayMembersTableDataSource,
  SwordplayMembersTableItem,
} from './swordplay-members-table-datasource';

@Component({
  selector: 'app-swordplay-members-table',
  templateUrl: './swordplay-members-table.component.html',
  styleUrls: ['./swordplay-members-table.component.scss'],
})
export class SwordplayMembersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<SwordplayMembersTableItem>;
  dataSource: SwordplayMembersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'patent'];

  constructor(
    private router: Router,
    private swordplayService: SwordplayService
  ) {}

  ngOnInit() {
    this.dataSource = new SwordplayMembersTableDataSource();
  }

  ngAfterViewInit() {
    this.swordplayService.read().subscribe((swordplayPlayer) => {
      console.log(swordplayPlayer);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = swordplayPlayer;
    });
  }

  navigateTo(id) {
    this.router.navigate(['/swordplay/member/' + id]);
  }
}
