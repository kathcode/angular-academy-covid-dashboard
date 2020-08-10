import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../../services/covid-data.service';
import {
  ISummary,
  ISummaryResponse,
  ICountry,
  ICountryDataDate,
  IGraphData,
  ISeries,
} from '../../models/covid-data.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  countries: ICountry[] = null;
  totalCases: number = null;
  totalDeaths: number = null;
  totalRecovered: number = null;
  graphData: IGraphData = null;
  data: ICountryDataDate[] = null;
  series: ISeries[] = null;
  constructor(private covidDataService: CovidDataService) {}

  ngOnInit(): void {
    this.covidDataService
      .getSummary()
      .subscribe((dataSummary: ISummaryResponse) => {
        const { Global, Countries } = dataSummary;
        const {
          TotalConfirmed,
          TotalDeaths,
          TotalRecovered,
        }: ISummary = Global;
        this.totalCases = TotalConfirmed;
        this.totalDeaths = TotalDeaths;
        this.totalRecovered = TotalRecovered;
        this.countries = Countries;
      });
    this.series = [
      {
        xKey: 'Date',
        yKey: 'Cases',
      },
    ];
  }

  onSelectCountry(country) {
    this.covidDataService
      .getDataByCountry(country)
      .subscribe((countryData: ICountryDataDate[]) => {
        this.data = countryData;
        this.graphData = {
          data: this.data,
          series: this.series,
        };
      });
  }
}
