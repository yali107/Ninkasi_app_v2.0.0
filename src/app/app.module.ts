import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentBasedRecComponent } from './models/content-based-rec/content-based-rec.component';
import { CollabFilteringRecComponent } from './models/collab-filtering-rec/collab-filtering-rec.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentBasedRecComponent,
    CollabFilteringRecComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
