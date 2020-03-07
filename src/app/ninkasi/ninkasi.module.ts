import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { NinkasiComponent } from './ninkasi.component';
import { ContentBasedRecComponent } from './content-based-rec/content-based-rec.component';
import { CollabFilteringRecComponent } from './collab-filtering-rec/collab-filtering-rec.component';
import { NinkasiRoutingModule } from './ninkasi-routing.module';
import { NinkasiHeaderComponent } from './ninkasi-header/ninkasi-header.component';

@NgModule({
    declarations: [
        NinkasiComponent,
        ContentBasedRecComponent,
        CollabFilteringRecComponent,
        NinkasiHeaderComponent
    ],
    imports: [
        RouterModule,
        NinkasiRoutingModule,
        CommonModule
    ]
})
export class NinkasiModule {}