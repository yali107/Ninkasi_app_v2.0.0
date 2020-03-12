import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { TeamComponent } from './pages/team/team.component';
import { ContentBasedRecComponent } from './ninkasi/content-based-rec/content-based-rec.component';
import { CollabFilteringRecComponent } from './ninkasi/collab-filtering-rec/collab-filtering-rec.component';
import { NinkasiComponent } from './ninkasi/ninkasi.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'workflow', component: WorkflowComponent },
  { path: 'team', component: TeamComponent },
  { path: 'ninkasi', loadChildren: './ninkasi/ninkasi.module#NinkasiModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
