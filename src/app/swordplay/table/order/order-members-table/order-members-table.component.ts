import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OrderReadDataList } from 'src/interfaces/tables/order-read.interface';
import { OrderMembersTableDataSource, OrderMembersTableItem } from './order-members-table-datasource';

@Component({
  selector: 'app-order-members-table',
  templateUrl: './order-members-table.component.html',
  styleUrls: ['./order-members-table.component.scss']
})
export class OrderMembersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<OrderMembersTableItem>;
  dataSource: OrderMembersTableDataSource;

  @Input() datalist:OrderReadDataList

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName'];

  ordersColumns: string[] = []
  ngOnInit() {
    this.dataSource = new OrderMembersTableDataSource(this.datalist);

    for(let order of this.datalist.orders){
      this.displayedColumns.push(order.name)
      this.ordersColumns.push(order.name)
    }

    // console.log(this.displayedColumns)
    // console.log(this.ordersColumns);

    // for(let orderColumn of this.ordersColumns){
    //   for(let player of this.datalist.players){
    //     console.log()
    //   }
    // }
    

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
