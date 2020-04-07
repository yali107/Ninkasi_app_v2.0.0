import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { Observable, merge, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { UserChoice } from './collab-filtering-rec.model';
import { ModelsService } from 'src/app/shared/services/models.service';


@Component({
  selector: 'app-collab-filtering-rec',
  templateUrl: './collab-filtering-rec.component.html',
  styleUrls: ['./collab-filtering-rec.component.scss']
})
export class CollabFilteringRecComponent implements OnInit, OnDestroy {
  preferenceForm: FormGroup;
  beerRecs;
  tableReady: boolean = false;
  isModelLoading: boolean = false;

  userSelections: FormArray;
  initPrefSub: Subscription;

  beerList;
  filteredOptions: Observable<string[]>;

  constructor(
    private modelsService: ModelsService
  ) { }

  //todo: fix autocomplete view bug where only 1 showing after previous selection, speed up autocomplete, add validator for valid prefs 2+.

  ngOnInit() {
    this.initForm();
    debugger;
    this.initPrefSub = this.modelsService.getBeerList().subscribe(
      data => {
        this.beerList = data;
        this.filteredOptions = merge(...(this.preferenceForm.get('userSelections') as FormArray).controls.map(control =>
          control.get('beer_name').valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
          )
        ));
      }
    )
  }

  private _filter(value): string[] {
    console.log('value', value)
    const filterValue = value.toLowerCase();

    return this.beerList.filter(option => option.toLowerCase().includes(filterValue));
  }

  private initForm() {
    this.userSelections = new FormArray([], this.minPrefsValidator(2));

    for (let i = 0; i < 2; i++) {
      this.addPrefsToArray();
    }

    this.preferenceForm = new FormGroup({
      'userSelections': this.userSelections
    })
  }

  public onShowMore() {
    if (this.userSelections.length < 10) {
      for (let i = 0; i < 8; i++) {
        this.addPrefsToArray();
      }
      this.filteredOptions = merge(...(this.preferenceForm.get('userSelections') as FormArray).controls.map(control =>
        control.get('beer_name').valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        )
      ));
    }
  }

  public minPrefsValidator(min: number): ValidatorFn {
    return (c: FormArray): {[key: string]: any} => {
      if ((c.controls.filter(control => control.status == 'VALID')).length >= min) {
        return null;
      }
      return { 'minPrefsValidator': {valid: false} };
    }
  }

  ngOnDestroy() {
    if (this.userSelections.length > 2) {
      this.initPrefSub.unsubscribe();
    }
  }

  public addPrefsToArray() {
    this.userSelections.push(
      new FormGroup({
        'index': new FormControl(this.userSelections.length),
        'beer_name': new FormControl(null),
        'preference': new FormControl(10)
      })
    );
  }

  get userSelectionsControls() {
    return (this.preferenceForm.get('userSelections') as FormArray).controls;
  }

  onSubmit() {
    this.isModelLoading = true;
    this.getBeerRec(this.preferenceForm.value);
  }

  public getBeerRec(userPrefs) {
    return this.modelsService.getCollabFilterBeers(userPrefs).subscribe(
      data => {
        this.beerRecs = data['rec_beers'];
        // debugger;
        this.tableReady = true;
        this.isModelLoading = false;
      }
    )
  }
}
