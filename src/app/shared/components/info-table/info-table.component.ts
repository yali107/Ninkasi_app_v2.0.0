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
  private columnDefs;
  // beerData = [
  //   { beerName: "one", state: "nn", avgOverallRating: 12, avgUserRating: 34, detailLink: "hihi" },
  //   { beerName: "two", state: "ds", avgOverallRating: 13, avgUserRating: 34, detailLink: "dsds" }
  // ]


  constructor() {
    this.columnDefs = [
      // { headerName: "#", field: "no", width: 100 },
      { headerName: "Beer Name", field: "beer_name", width: 300 },
      { headerName: "State", field: "state", width: 200 },
      { headerName: "Avg User Rating (1-20)", field: "avg_user_rating", width: 100 },
      { headerName: "Avg Overall Rating (1-20)", field: "avg_overall_rating", width: 100 },
      { headerName: "More Details", field: "detail_link", width: 100 }
    ];
  }

  ngOnInit() {
    // debugger;
  }

  updateData() {
    this.updateRowData
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.beerData);
  }

}
