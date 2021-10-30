import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CaseListComponent } from './case-list/case-list.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CaseListComponent
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
