import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IActivityLog } from '../../shared/models/IActivityLog';

@Component({
  selector: 'app-patient-activity-logs',
  templateUrl: './patient-activity-logs.component.html',
  styleUrls: ['./patient-activity-logs.component.css']
})
export class PatientActivityLogsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'activity'];
  dataSource = new MatTableDataSource<IActivityLog>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: IActivityLog[] = [
  { dateTime: new Date(2020, 4, 4, 7, 8, 2, 11), activity: "Patient has fallen" },
  { dateTime: new Date(2020, 4, 4, 7, 5, 4, 11), activity: "Entered bedroom" },
  { dateTime: new Date(2020, 4, 4, 7, 3, 42, 11), activity: "Connected" },
  { dateTime: new Date(2020, 4, 4, 19, 23, 55, 11), activity: "Disconnected" },
  { dateTime: new Date(2020, 4, 4, 19, 20, 16, 11), activity: "Entered bedroom" },
];