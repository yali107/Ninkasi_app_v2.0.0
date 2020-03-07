import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { TeamComponent } from './team/team.component';
import { NinkasiModule } from './ninkasi/ninkasi.module';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    IntroComponent,
    WorkflowComponent,
    TeamComponent,
    // NinkasiComponent,
    // ContentBasedRecComponent,
    // CollabFilteringRecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    NinkasiModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas),
    library.addIconPacks(fab),
    library.addIconPacks(far)
  }
}
