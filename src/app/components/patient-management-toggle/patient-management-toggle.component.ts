import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patient-management-toggle',
  templateUrl: './patient-management-toggle.component.html',
  styleUrls: ['./patient-management-toggle.component.css']
})
export class PatientManagementToggleComponent implements OnInit {
  public static selectedIndex: number = 0;
  @Input() icon: string;
  @Input() index: string;
  @Output() selectionChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    PatientManagementToggleComponent.selectedIndex = 0;
    this.selectionChanged.emit(PatientManagementToggleComponent.selectedIndex);
  }

  // Getter to toggle button colour.
  get Selected(): boolean {
    if (parseInt(this.index) === PatientManagementToggleComponent.selectedIndex) {
      return true;
    }
    return false;
  }

  // Sets selected index and emits to parent.
  public Select(): void {
    {
      PatientManagementToggleComponent.selectedIndex = parseInt(this.index);
      this.selectionChanged.emit(PatientManagementToggleComponent.selectedIndex);
    }
  }

}
