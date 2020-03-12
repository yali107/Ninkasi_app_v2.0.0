import { Component, OnInit } from '@angular/core';

import { ModelsService } from '../../shared/services/models.service';

@Component({
  selector: 'app-content-based-rec',
  templateUrl: './content-based-rec.component.html',
  styleUrls: ['./content-based-rec.component.scss']
})
export class ContentBasedRecComponent implements OnInit {
  beerInput: string;
  beerlist;
  similarBeers = [];
  beerKeywords = [];

  constructor(
    private modelsService: ModelsService
  ) { }

  ngOnInit() {
  }

  public onGetBeerlist() {
    this.modelsService.getBeerList().subscribe(
      data => {
        this.beerlist = data;
      }
    )
  }

  public onGetSimilarBeers() {
    this.modelsService.getContentBasedBeers(this.beerInput)
      .subscribe(
        data => {
          this.similarBeers = data['rec_beers'];
          console.log(this.similarBeers);
        }
      )
  }

  public onGetBeerKeywords() {
    console.log('beer input:', this.beerInput);
    this.modelsService.getBeerKeywords(this.beerInput)
      .subscribe(
        data => {
          this.beerKeywords = data['beer_keywords'];
        });

  }

  public onGetBeerInput(event: Event) {
    this.beerInput = (<HTMLInputElement>event.target).value;
    console.log(this.beerInput)
  }


}
