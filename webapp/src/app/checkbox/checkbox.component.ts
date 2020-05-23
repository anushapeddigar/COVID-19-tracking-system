import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  returnUrl: string;
  master_checked = false;
/*
    Add symptoms to checkbox list
*/
  checkbox_list = [];
  constructor(private router: Router) {
    this.checkbox_list = [
      {
        name: 'Fever',
        disabled: false,
        checked: false,
        labelPosition: 'after'
      }, {
        name: 'Tiredness',
        disabled: false,
        checked: false,
        labelPosition: 'after'
      }, {
        name: 'Dry Cough',
        disabled: false,
        checked: false,
        labelPosition: 'after'
      }, {
        name: 'Aches and Pains',
        disabled: false,
        checked: false,
        labelPosition: 'after'
      }, {
        name: 'Nasal congestion',
        disabled: false,
        checked: false,
        labelPosition: 'after'
      }, {
        name: 'Runny nose',
        disabled: false,
        checked: false,
        labelPosition: 'after'
      }, {
        name: 'Sore throat',
        disabled: false,
        checked: false,
        labelPosition: 'after'
      },
      {
        name: 'Diarrhoea',
        disabled: false,
        checked: false,
        labelPosition: 'after'
      }
    ];
  }

  ngOnInit() {
  }

/*
    Code to check all the checkboxes
*/
  master_change() {
    for (const value of Object.values(this.checkbox_list)) {
      value.checked = this.master_checked;
    }
  }

/*
    Navigation logic:
    Redirect to Patient registration if all the mandatory symptoms are checked
    Redirect to Covid-19 Information page if all the mandatory symptoms are not checked
*/
  goToPage(pageName: string) {
    let checked_count = 0;
    for (const value of Object.values(this.checkbox_list)) {
      if (value.checked == true && (value.name == 'Fever' || value.name == 'Tiredness' || value.name == 'Dry Cough')) {

        checked_count++;
      }
    }
    if (checked_count == 3) {
      const url = '/register';
      this.router.navigateByUrl(url).then(e => {
        if (e) {
          console.log('Navigation is successful!');
          alert('You have all the mandatory symptoms..Please provide the below details for registration');
        } else {
          console.log('Navigation has failed!');
        }
      });
    } else {
      const url = 'covid-19-pandemic/informationPage';
      this.router.navigateByUrl(url).then(e => {
        if (e) {
          console.log('Navigation is successful!');
          alert('You donot all the mandatory symptoms..Please find some helpful precautions');
        } else {
          console.log('Navigation has failed!');
        }
      });
    }
  }
}
