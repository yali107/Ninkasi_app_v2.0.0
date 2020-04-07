import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit {
  
  @Input() beerData: any;
  @Output() updateRowData = new EventEmitter();

  private gridApi;
  private gridColumnApi;
  private sortingOrder;
  public columnDefs;
  public rowClassRules;
  public domLayout = 'autoHeight';

  constructor() {
    this.columnDefs = [
      { headerName: "Beer Name", field: "beer_name", sortingOrder: ["asc", "desc"], sortable:true, filter:true },
      { headerName: "State", field: "state", sortingOrder: ["asc", "desc"], sortable:true, filter:true },
      { headerName: "Avg User Rating (1-20)", field: "avg_user_rating", sortingOrder: ["asc", "desc"], sortable:true },
      { headerName: "Avg Overall Rating (1-20)", field: "avg_overall_rating", sortingOrder: ["asc", "desc"], sortable:true },
      { 
        headerName: "More Details", 
        field: "detail_link",
        cellRenderer: (params) => {
          return '<a href="' + params.value + '">Link</a>';
        } 
      }
    ];
    this.rowClassRules = {
      'even': (params) => {
        debugger;
        return +params.node.id % 2 === 1;
      }
    }
  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    params.api.setRowData(this.beerData);
    this.gridApi.sizeColumnsToFit();
  }

}
