import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

interface PendingCase {
  accessionNo: string;
}

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {
  cols: any[] = [];
  siteCodes: any[] = [];
  pendingCasesLoading = false;
  selection: any;
  selectedCases: PendingCase[] = [];
  displayInfo = false;
  accessionId: number = 0;
  accInfoHeader: string = '';
  assignToDialogOpen = false;
  pendingCasesList: PendingCase[] = [];
  menuItems: MenuItem[] = [];
  pendingExportFileName = 'pendingExportFileName';
  @Output() addNote = new EventEmitter<string>();
  @ViewChild('pendingCases') cases!: Table;
  constructor() { }
  ngOnInit(): void {
    this.cols = [
      { field: 'accessionNo', header: 'Accession #', width: '0 0 12%' },
      { field: 'siteCode', header: 'Site', filterType: 'custom', filterField: 'siteCode', width: '0 0 10%' },
      { field: 'accessionDate', header: 'Accession Date', format: 'yyyy-MM-dd', width: '0 0 12%' },
      { field: 'lastSlideScanDate', header: 'Last Scan Date', format: 'yyyy-MM-dd hh:mm a', width: '0 0 17%' },
      { field: 'statusName', header: 'Status', width: '0 0 12%' },
      { field: 'accountNo', header: 'Account #', width: '0 0 10%' },
      { field: 'accountName', header: 'Account Name', width: '0 0 16%' },
      { field: 'queuedFor', header: 'Assigned To', width: '0 0 8%', tooltipField: 'holdReason' }
    ];
  }
  rowSelected(event: any) {
    console.log('this.selectedCases', this.selectedCases);
  }
  rowUnselected(event: any) {
    console.log('this.selectedCases', this.selectedCases);
  }
  applyGlobalFilter(event: any, filter: string): void {
    this.cases.filterGlobal((event.target as HTMLInputElement).value, filter);
  }
  clearFilter(table: Table) {
    table.clear();
    table.clearState();
  }
  onRefresh() {
    console.log('onRefresh');
  }
}
