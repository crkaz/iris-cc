import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'description', 'tools'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: any [] = [
  { dateTime: "7/23/2020, 11:23:42 PM", description: "Take medication" },
  { dateTime: "7/23/2020, 11:23:42 PM", description: "Doctors appointment" },
  { dateTime: "7/23/2020, 11:23:42 PM", description: "Your Birthday" },
];