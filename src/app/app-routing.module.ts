import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { BitacoraComponent } from './bitacora/bitacora.component';

const routes: Routes = [
  {path:'',component:AllCharactersComponent},
  {path:'comics',component:ComicsComponent},
  {path:'bitacora',component:BitacoraComponent},
  {path:'series',component:SeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
