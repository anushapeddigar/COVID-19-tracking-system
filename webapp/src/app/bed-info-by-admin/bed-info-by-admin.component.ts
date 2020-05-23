import {Component, Input, OnInit} from '@angular/core';
import {BedService} from '../services/bed.service';
import {Bed} from '../models/bed';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bed-info-by-admin',
  templateUrl: './bed-info-by-admin.component.html',
  styleUrls: ['./bed-info-by-admin.component.scss']
})
export class BedInfoByAdminComponent implements OnInit {

  @Input() bedsChild: Array<Bed>;
  bedService: BedService;
  newHospitalInfo: boolean;
  bedInfo: Bed;

  constructor(bedService: BedService) {
    this.bedService = bedService;
  }

  ngOnInit() {
  }

  /*
    * Function to display information about Bed
    * If New Hospital then display form to add new Hospital Info
    * If existing Hospital then display information about bed count
  */

  displayInformation(value: string) {
    let id;
    if (value === '') {
      this.newHospitalInfo = false;
      this.bedInfo = null;
    } else if (value === 'new hospital') {
        this.newHospitalInfo = true;
        this.bedInfo = null;
    } else {
      this.newHospitalInfo = false;
      try {
        // tslint:disable-next-line:radix
        id = value;
      } catch (e) {
        console.log('cannot convert string to number', e.message);
      }
      const bedById = this.bedService.getBedInfoById(id);
      bedById.subscribe(bed => {
        this.bedInfo = bed;
      });
    }
  }

  /*
  * Functionality to remove selected Hospital entry
  * */
  removeHospital(hospitalBedInfo: Bed) {
    if (confirm('Are you sure to remove hospital entry ' + hospitalBedInfo.hospital)) {
      this.bedsChild = this.bedsChild.filter(bed => bed.id !== hospitalBedInfo.id);
      this.bedService.removeHospitalInfo(hospitalBedInfo.id).subscribe();
      this.refreshPage();
    }
  }

  /*
  * Functionality to add new Hospital information with bed count
  * */
  addBedInformation(state: string, city: string, hospitalName: string, address: string,
                    pincode: string, totalBeds: string, availableBeds: string) {
    /* ToDo: mandatory fields asterisk sign */
    if (!state || !city || !hospitalName || !pincode || !totalBeds || !availableBeds) {
      alert('Warning: All fields are mandatory');
      return;
    }
    const totalCount = Number(totalBeds);
    const availableCount = Number(availableBeds);
    if (isNaN(totalCount) || isNaN(availableCount)) {
      alert('Warning: Add number value for bed count');
      return;
    }
    if (availableCount > totalCount) {
      alert('Warning: Available Beds can not be more than Total Bed capacity of Hospital.');
      return;
    }
    const newBedInfo = new Bed(state, city, hospitalName, pincode, totalCount, availableCount);
    this.bedService.addBed(newBedInfo).subscribe(bed => this.bedsChild.push(bed));
    this.refreshPage();
  }

  /*
    function to display original bed management page
  * */
  refreshPage() {
    this.newHospitalInfo = false;
    this.bedInfo = null;
  }

  /*
   Functionality to add new beds
  * */
  addBedCount(addBedCount: string, isTotalBedCount: boolean) {
    const addCount = Number(addBedCount);
    if (this.bedInfo && !isNaN(addCount)) {
      if (isTotalBedCount) {
        this.bedInfo.totalBeds = this.bedInfo.totalBeds + addCount;
      } else {
        const availableCount = this.bedInfo.availableBeds + addCount;
        if (availableCount > this.bedInfo.totalBeds) {
          alert('Warning: Available Beds can not be more than Total Bed capacity of Hospital.');
          return;
        }
        this.bedInfo.availableBeds = availableCount;
      }
    }
  }

  /*
   Functionality to remove beds
  * */
  removeBedCount(removeBedCount: string, isTotalBedCount: boolean) {
    const removeCount = Number(removeBedCount);
    if (this.bedInfo && !isNaN(removeCount)) {
      if (isTotalBedCount) {
          const totalCount = this.bedInfo.totalBeds - removeCount;
          if (totalCount < this.bedInfo.availableBeds) {
            alert('Warning: Total bed count cannot be less than Available beds of Hospital.');
            return;
          } else if (totalCount < 0) {
            alert('Warning: Bed count cannot be less than 0.');
            return;
          }
          this.bedInfo.totalBeds = totalCount;
      } else {
          if (this.bedInfo.availableBeds - removeCount < 0) {
            alert('Warning: Bed count cannot be less than 0.');
            return;
          }
          this.bedInfo.availableBeds = this.bedInfo.availableBeds - removeCount;
      }
    }
  }

  /*
    Functionality to update hospital bed information
  * */
  updateHospitalBedInfo(hospitalBedInfo: Bed) {
    this.bedService.updateBedInfo(hospitalBedInfo).subscribe(bedInfo => {
      const index = bedInfo ? this.bedsChild.findIndex(bed => bed.id === bedInfo.id) : -1;
      if (index > -1) {
        this.bedsChild[index] = bedInfo;
      }
    });
    this.refreshPage();
  }
}
