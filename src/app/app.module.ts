import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NabvarComponent } from './components/shered/nabvar/nabvar.component';



//IMPORTAR RUTAS
import {ROUTES} from './app.routes';

//PIPES
import { NoimagePipe } from './pipes/noimage.pipe';


//SERVICIOS
import { SpotifyService } from './services/spotify.service';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NabvarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    ArtistaComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    //IMPORTAS LAS RUTAS ESPECIFICAS DEL ARCHIVO RUTES
    RouterModule.forRoot(ROUTES, { useHash:true } )
   
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
