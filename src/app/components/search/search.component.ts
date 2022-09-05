import { Component, OnInit } from '@angular/core';
import { album } from 'src/app/models/album.model';
import { SpotifyService } from 'src/app/services/spotify.service';





@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: album [] = [];

  constructor(private spotify:SpotifyService) { }

  buscar(termino:string){
    console.log(termino);
    this.spotify.getArtista(termino).subscribe((data:album[]) =>{
      this.artistas = data
      const name = this.artistas.map( d => d.followers );
      console.log(name);
    });
    
  }
}
