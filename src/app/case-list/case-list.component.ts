import { Component, OnInit } from '@angular/core';

interface PendingCase {
  caseNo: string;
}

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html'
})
export class CaseListComponent implements OnInit {
  cols: any[] = [];
  selectedCases: PendingCase[] = [];
  pendingCasesList: PendingCase[] = [];
  ngOnInit(): void {
    this.cols = [
      { field: 'caseNo', header: 'Case #', width: '0 0 12%' },
      { field: 'code', header: 'Code', filterType: 'custom', width: '0 0 10%' },
      { field: 'caseDate', header: 'Case Date', format: 'yyyy-MM-dd', width: '0 0 12%' },
      { field: 'lastCaseDate', header: 'Last Case Date', format: 'yyyy-MM-dd hh:mm a', width: '0 0 17%' },
      { field: 'statusName', header: 'Status', width: '0 0 12%' },
      { field: 'accountNo', header: 'Account #', width: '0 0 10%' },
      { field: 'accountName', header: 'Account Name', width: '0 0 16%' },
      { field: 'queuedFor', header: 'Assigned To', width: '0 0 8%', tooltipField: 'holdReason' }
    ];
  }
}
