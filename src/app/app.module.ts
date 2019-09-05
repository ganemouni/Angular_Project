import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule } from '@angular/forms';
import { CreateRepositoryService} from './create-repository.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations:   [
    AppComponent,
   routingComponents,
   PagenotfoundComponent,
   FavouritesComponent,
   HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CreateRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
