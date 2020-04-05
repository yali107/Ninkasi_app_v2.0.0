import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';



import { UserChoice } from './collab-filtering-rec.model';
import { ModelsService } from 'src/app/shared/services/models.service';
import { debug } from 'util';


@Component({
  selector: 'app-collab-filtering-rec',
  templateUrl: './collab-filtering-rec.component.html',
  styleUrls: ['./collab-filtering-rec.component.scss']
})
export class CollabFilteringRecComponent implements OnInit {
  mockInput: UserChoice[] = [
    { beer_name: 'Yazoo Embrace the Funk Series: Deux Rouges', preference: 20 },
    { beer_name: 'Iron Hill Bourbon Porter', preference: 3 },
  ]

  preferenceForm: FormGroup;
  beerRecs;
  tableReady: boolean = false;

  private gridApi;
  columnDefs;
  

  constructor(
    private modelService: ModelsService
  ) { 
    // this.columnDefs = [
    //   // { headerName: "#", field: "no", width: 100 },
    //   { headerName: "Beer Name", field: "beer_name", width: 300 },
    //   { headerName: "State", field: "state", width: 200 },
    //   { headerName: "Avg User Rating (1-20)", field: "avg_user_rating", width: 100 },
    //   { headerName: "Avg Overall Rating (1-20)", field: "avg_overall_rating", width: 100 },
    //   { headerName: "More Details", field: "detail_link", width: 100 }
    // ];
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let userSelections: FormArray = new FormArray([]);

    userSelections.push(
      new FormGroup({
        'beer_name': new FormControl(null, Validators.required),
        'preference': new FormControl(10)
      })
    )

    userSelections.push(
      new FormGroup({
        'beer_name': new FormControl(null, Validators.required),
        'preference': new FormControl(10)
      })
    )

    this.preferenceForm = new FormGroup({
      'userSelections': userSelections
    })
  }

  get userSelectionsControls() {
    return (this.preferenceForm.get('userSelections') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.preferenceForm.value);
    this.getBeerRec(this.preferenceForm.value);
  }

  public getBeerRec(userPrefs) {
    console.log('cf rec')
    return this.modelService.getCollabFilterBeers(userPrefs).subscribe(
      data => {
        console.log(data);
        this.beerRecs = data['rec_beers'];
        // debugger;
        this.tableReady = true;
      }
    )
  }

  updateTable() {
    this.gridApi.refreshCells();
  }
}
