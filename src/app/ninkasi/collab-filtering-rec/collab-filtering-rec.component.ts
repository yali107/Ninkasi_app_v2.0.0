import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';



import { UserChoice } from './collab-filtering-rec.model';
import { ModelsService } from 'src/app/shared/services/models.service';


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

  constructor(
    private modelService: ModelsService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    // let beerName: string = '';
    // let preference: number = 0;
    // let userChoices = new FormControl(null, Validators.required)
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

    // userSelections.push(
    //   new FormGroup({
    //     'beer_name': new FormControl(null),
    //     'preference': new FormControl(10)
    //   })
    // )

    // userSelections.push(
    //   new FormGroup({
    //     'beer_name': new FormControl(null),
    //     'preference': new FormControl(10)
    //   })
    // )

    // userSelections.push(
    //   new FormGroup({
    //     'beer_name': new FormControl(null),
    //     'preference': new FormControl(10)
    //   })
    // )

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
      }
    )
  }
}
