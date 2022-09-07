import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})

export class ArtistaComponent  {

  loadingArtist:boolean;
  artista: any = {};  //artista inicializado con un objeto vacio
  topTracks:any [] =[];
 

  
  constructor( private router: ActivatedRoute,
              private spotify: SpotifyService) { //IMPORTO LOS SEVICIOS
                this.loadingArtist=true;   

      this.router.params.subscribe( params => {
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
      });
   }

  getArtista(id:string){
    this.loadingArtist=true;

    this.spotify.getArtista(id).subscribe(artista => {
     console.log(artista);
      setTimeout(() => {
      this.artista=artista;
      this.loadingArtist=false;
     }, 1000);
     
    });

  }

   getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTrack =>{
        console.log(topTrack);
        this.topTracks = topTrack;
    });
   }

}
