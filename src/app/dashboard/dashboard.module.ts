import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AgChartsAngularModule,
    HttpClientModule,
  ],
})
export class DashboardModule {}
