import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICarer } from '../../shared/models/ICarer';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-carers-list',
  templateUrl: './carers-list.component.html',
  styleUrls: ['./carers-list.component.css']
})
export class CarersListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'role', 'assignedPatients'];
  selectedRole: string = "formal";
  dataSource = new MatTableDataSource<ICarer>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  // AssignPatient(carerId: string, patientId: string): void {
  Assign(event: MatChipInputEvent, carer: ICarer): void {
    const input = event.input;
    const value = event.value;

    // Add patient to carer's patient collection.
    if ((value || '').trim()) {
      carer.patients.push(value);
    }

    // Reset the input value.
    if (input) {
      input.value = '';
    }
  }

  // UnassignPatient(carerId: string, patientId: string): void {
  Unassign(carer: ICarer, patientId: string): void {
    const index = carer.patients.indexOf(patientId);

    if (index >= 0) {
      carer.patients.splice(index, 1);
    }
  }
}

const ELEMENT_DATA: ICarer[] = [
  { email: "aksfhajf@nhs.gov", role: "formal", patients: ["#571928", "#105989", "#109230"] },
  { email: "abc_1234@gmail.com", role: "informal", patients: ["#571928"] },
  { email: "jkljao@nhs.gov", role: "admin", patients: ["#105989", "#124800"] },
  { email: "asdjkalfhfo@nhs.gov", role: "admin", patients: [] },
];