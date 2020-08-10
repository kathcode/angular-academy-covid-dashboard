import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  BASEURL = 'https://api.covid19api.com/';
  constructor(private http: HttpClient) {}

  getSummary() {
    const pathUrl = `${this.BASEURL}summary`;
    return this.http.get(pathUrl);
  }

  getDataByCountry(country: string) {
    const pathUrl = `${this.BASEURL}dayone/country/${country}/status/confirmed`;
    return this.http.get(pathUrl);
  }
}
