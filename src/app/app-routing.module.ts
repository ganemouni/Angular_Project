import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Level2Component } from './level2/level2.component';
import { AppComponent } from './app.component';
import { Level1Component } from './level1/level1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // {path: '', component:HomeComponent},
   {path: 'level0', component:Level1Component},
  {path: 'level1', component:Level2Component},
  {path: 'level2', component:FavouritesComponent},
  {path: 'home', component:HomeComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponents =[ Level2Component,
   Level1Component,FavouritesComponent,HomeComponent ,PagenotfoundComponent]
