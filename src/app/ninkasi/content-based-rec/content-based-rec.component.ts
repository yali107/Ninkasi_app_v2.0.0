import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


import { ModelsService } from '../../shared/services/models.service';

@Component({
  selector: 'app-content-based-rec',
  templateUrl: './content-based-rec.component.html',
  styleUrls: ['./content-based-rec.component.scss']
})
export class ContentBasedRecComponent implements OnInit {
  beerForm: FormGroup;
  beerRecs;

  beerList;
  filteredOptions: Observable<string[]>;

  // beerList = [
  //   "Abita Select Imperator", "Abita Shotgun Double IPA", "Abita Wrought Iron IPA", "Against the Grain / De Molen Bo & Luke", "Against the Grain / Dry & Bitter Your Lytest One", "Against the Grain / To l An Ale Pleasure", "Against the Grain 35K Stout", "Against the Grain 70K", "Against the Grain Brett The Hipman Hop", "Against the Grain Citra Ass Down", "Against the Grain Gnight Ryder", "Against the Grain London Balling", "Against the Grain Rico Sauvin", "Against the Grain The Green Dragon", "Against the Grain Tropical Segway Kitten", "Alaskan Pilot Series: Barley Wine Ale", "Alaskan Smoked Porter", "Alba Vineyard Forbidden", "Alchemist Heady Topper", "AleSmith Speedway Stout",
  // ]

  beerKeywords: string;
  areKeywordsReady: boolean = false;
  areBeerRecsReady: boolean = false;

  constructor(
    private modelsService: ModelsService
  ) { }

  ngOnInit() {
    // this.getBeerlist();
    this.initForm();

    this.modelsService.getBeerList().subscribe(
      data => {
        this.beerList = data;
        console.log(this.beerList)
        this.filteredOptions = this.beerForm.get('beer_selected').valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        )
      }
    )

    // this.filteredOptions = this.beerForm.get('beer_selected').valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // )
      // debugger;
  }

  private _filter(value): string[] {
    // debugger;
    console.log('value', value)
    const filterValue = value.toLowerCase();

    return this.beerList.filter(option => option.toLowerCase().includes(filterValue));
  }

  private initForm() {
    let beerInput: string = '';

    this.beerForm = new FormGroup({
      'beer_selected': new FormControl(beerInput, Validators.required)
    });
  }

  public onSubmit() {
    this.onGetBeerKeywords(this.beerForm.value.beer_selected);
    this.onGetSimilarBeers(this.beerForm.value.beer_selected);
  }

  // public getBeerlist() {
  //   this.modelsService.getBeerList().subscribe(
  //     data => {
  //       console.log(data)
  //       this.beerList = data;
  //     }
  //   )
  // }

  public onGetSimilarBeers(beerSelected) {
    this.modelsService.getContentBasedBeers(beerSelected)
      .subscribe(
        data => {
          this.beerRecs = data['rec_beers'];
          console.log(this.beerRecs);
          this.areBeerRecsReady = true;
        }
      )
  }

  public onGetBeerKeywords(beerSelected) {
    this.modelsService.getBeerKeywords(beerSelected)
      .subscribe(
        data => {
          this.beerKeywords = data['beer_keywords'].join(', ');
          this.areKeywordsReady = true;
        });
  }

  // public onGetBeerInput(event: Event) {
  //   this.beerInput = (<HTMLInputElement>event.target).value;
  //   console.log('beer input', this.beerInput)
  // }


}
