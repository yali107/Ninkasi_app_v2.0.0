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
  public domLayout = 'autoHeight';
  // beerData = [
  //   { beerName: "one", state: "nn", avgOverallRating: 12, avgUserRating: 34, detailLink: "hihi" },
  //   { beerName: "two", state: "ds", avgOverallRating: 13, avgUserRating: 34, detailLink: "dsds" }
  // ]


  constructor() {
    this.columnDefs = [
      // { headerName: "#", field: "no", width: 100 },
      { headerName: "Beer Name", field: "beer_name" },
      { headerName: "State", field: "state" },
      { headerName: "Avg User Rating (1-20)", field: "avg_user_rating" },
      { headerName: "Avg Overall Rating (1-20)", field: "avg_overall_rating" },
      { 
        headerName: "More Details", 
        field: "detail_link",
        cellRenderer: (params) => {
          return '<a href="' + params.value + '">Link</a>';
        } 
      }
    ];
  }

  ngOnInit() {
    // debugger;
  }

  // updateData() {
  //   this.updateRowData
  // }

  onGridReady(params) {
    this.gridApi = params.api;
    params.api.setRowData(this.beerData);
    this.gridApi.sizeColumnsToFit()
  }

}
