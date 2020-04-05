import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


import { ModelsService } from '../../shared/services/models.service';

@Component({
  selector: 'app-content-based-rec',
  templateUrl: './content-based-rec.component.html',
  styleUrls: ['./content-based-rec.component.scss']
})
export class ContentBasedRecComponent implements OnInit {
  beerForm: FormGroup;
  beerRecs;
  beerKeywords: string;
  areKeywordsReady: boolean = false;
  areBeerRecsReady: boolean = false;

  constructor(
    private modelsService: ModelsService
  ) { }

  ngOnInit() {
    this.initForm();
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

  // public onGetBeerlist() {
  //   this.modelsService.getBeerList().subscribe(
  //     data => {
  //       console.log(data)
  //       this.beerlist = data;
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
