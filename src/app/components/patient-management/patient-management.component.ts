import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.css']
})
export class PatientManagementComponent implements OnInit {
  @ViewChild('matGridList', { static: false }) matGridList: ElementRef;
  public selectedIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.selectedIndex = 0;
  }

  LoadContent(index: number) {
    this.selectedIndex = index;
  }
}
