import { Component, OnInit } from '@angular/core';
// import { TestHttpService } from '../../shared/services/test/test-http.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
  public nCols: number; //3
  public patientInfoCols: number; //1
  public patientManagementCols: number;//2
  public activityLogsCols: number;//1
  public statisticsCols: number;//1
  public activityPlotCols: number;//1

  constructor(/*public talkto: TestHttpService*/) { }

  ngOnInit() {
    // this.talkto.GetPatients().subscribe((data: any[]) => {
    //   console.log(data);
    // })
    this.SetColSize();
  }

  onResize(event) {
    this.SetColSize();
  }

  // Dynamically sets the number of columns for patient 'cards' on the dashboard, based on window width.
  private SetColSize(): void {
    const width = window.innerWidth;
    if (width >= 1200) {
      this.nCols = 5;
      this.patientInfoCols = 2;
      this.patientManagementCols = 3;
      this.activityPlotCols = 2;
      this.activityLogsCols = 2;
      this.statisticsCols = 1;

    } else {
      this.nCols = 1;
      this.patientInfoCols = 1;
      this.patientManagementCols = 1;
      this.activityPlotCols = 1;
      this.activityLogsCols = 1;
      this.statisticsCols = 1;
    }
  }
}
