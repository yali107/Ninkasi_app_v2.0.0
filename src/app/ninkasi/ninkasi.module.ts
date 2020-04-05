import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AgGridModule } from 'ag-grid-angular';

import { NinkasiComponent } from './ninkasi.component';
import { ContentBasedRecComponent } from './content-based-rec/content-based-rec.component';
import { CollabFilteringRecComponent } from './collab-filtering-rec/collab-filtering-rec.component';
import { NinkasiRoutingModule } from './ninkasi-routing.module';
import { NinkasiHeaderComponent } from './ninkasi-header/ninkasi-header.component';
import { InfoTableComponent } from '../shared/components/info-table/info-table.component';

@NgModule({
    declarations: [
        NinkasiComponent,
        ContentBasedRecComponent,
        CollabFilteringRecComponent,
        NinkasiHeaderComponent,
        InfoTableComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        AgGridModule.withComponents([]),
        MatAutocompleteModule,

        NinkasiRoutingModule,
    ]
})
export class NinkasiModule {}