import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corona-virus-precautions',
  templateUrl: './corona-virus-precautions.component.html',
  styleUrls: ['./corona-virus-precautions.component.scss']
})
export class CoronaVirusPrecautionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(option: number) {
    switch (option) {
      case 1:
      window.open('https://www.who.int/news-room/detail/14-04-2020-first-un-solidarity-flight-departs-addis-' +
      'ababa-carrying-vital-covid-19-medical-supplies-to-all-african-nations');
      break;
      
      case 2:
      window.open('https://www.who.int/news-room/detail/13-04-2020-public-statement-for-collaboration-on-' +
      'covid-19-vaccine-development');
      break;
      
      case 3:
      window.open('https://www.who.int/news-room/detail/09-04-2020-children-s-story-book-released-to-help-' +
      'children-and-young-people-cope-with-covid-19');
      break;
      
      case 4:
      window.open('https://www.who.int/dg/speeches/detail/who-director-general-s-opening-remarks-at-the-' +
      'mission-briefing-on-covid-19---13-march-2020');
      break;
    }
  }
}
