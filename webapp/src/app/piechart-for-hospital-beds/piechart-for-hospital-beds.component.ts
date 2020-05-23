import {Component, Input, OnInit} from '@angular/core';
import {Bed} from '../models/bed';

@Component({
  selector: 'app-piechart-for-hospital-beds',
  templateUrl: './piechart-for-hospital-beds.component.html',
  styleUrls: ['./piechart-for-hospital-beds.component.scss']
})
export class PiechartForHospitalBedsComponent implements OnInit {

  @Input() totalBeds: Array<Bed>;
  pieChartLabels: Array<string> = [];
  pieChartData: Array<number> = [];
  public pieChartType = 'pie';
  isCharReady: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  /* Function to display Pie Chart for available bed */
  displayChart() {
    this.isCharReady = true;
    if (this.totalBeds) {
      this.totalBeds.forEach(bed => {
        this.pieChartLabels.push(bed.hospital);
        this.pieChartData.push(bed.availableBeds);
      });
    }
  }

  // events
  public chartClicked(e: any) {
    console.log(e);
  }

  public chartHovered(e: any) {
    console.log(e);
  }
}
