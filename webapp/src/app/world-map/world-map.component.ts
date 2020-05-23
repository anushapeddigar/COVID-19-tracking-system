import { Component, OnInit } from '@angular/core';
import {WorldMapService} from '../services/world-map.services';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

  title = 'google';
  totalAngularPackages;
  public regions = [];
  // public regionsArr = [];

  constructor(private worldMapService: WorldMapService) {
    // var regionArr : [string,number] =
    const myMapsApiKey = 'AIzaSyD5csrfsy9tOIWeoxcsQmtFSLfp4LIIerA'; // API key for my map
    this.getTasks();
    // var appComponent : AppComponent;
    //regionsArr.push(appComponent.getTasks());
    google.charts.load('current', {
      packages: ['geochart'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey: myMapsApiKey
    });
  }


  ngOnInit(): void {
  }

  getTasks(): void {
    const Todos = [['Country', 'Covid-19 Cases', 'Deaths']];
    this.worldMapService.getAllCountryCases().subscribe(todos => {
      let resArr;
      resArr = todos;
      resArr.response.map((item) => {
        if (item.country === 'USA') {
          item.country = 'United States';
        }
        if (item.country === 'All') {
          item.cases.total = 0;
        }
        if (item.country === 'Europe') {
          item.cases.total = 0;
        }
        if (item.country === 'South-Africa') {
          item.country = 'South Africa';
        }
        if (item.country === 'UK') {
          item.country = 'United Kingdom';
        }
        if (item.country === 'Saudi-Arabia') {
          item.country = 'Saudi Arabia';
        }
        if (item.country === 'S-Korea') {
          item.country = 'South Korea';
        }
        if (item.country === 'Congo') {
          item.country = 'CD';
        }
        if (item.country === 'CAR') {
          item.country = 'Central African Republic';
        }
        if (item.country === 'South-Sudan') {
          item.country = 'SS';
        }
        Todos.push([item.country, item.cases.total, item.deaths.total]);

    });

      // Todos.sort();
      google.charts.setOnLoadCallback(drawRegionsMap);
      function drawRegionsMap() {
      const data = google.visualization.arrayToDataTable(Todos); // pushing country array data to the inbuit google
        // function to arrayToDataTable

      const options = {colorAxis: {colors: ['#EE6271', '#8F0816']}, backgroundColor : '#030100'};
      // color selection for marked components
      const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      // generating regions in the map,everything except antarctica
      chart.draw(data, options);
  }
      });
    }
}
