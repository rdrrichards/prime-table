import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CaseListComponent } from './case-list/case-list.component';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    CaseListComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ContextMenuModule,
    DialogModule,
    FormsModule,
    TableModule,
    TooltipModule,
    ProgressSpinnerModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
