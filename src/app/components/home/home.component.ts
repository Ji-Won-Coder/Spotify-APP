import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles:[]
  
})
export class HomeComponent {

  nuevasCanciones: any [] =[];
  loading:boolean;
  error: boolean;
  mensajeError: any;
  
  

  constructor(private spotify:SpotifyService) { 

    this.loading=true;
    this.spotifyService();
    this.error=false;
    mensajeError:String;
  }


  public spotifyService(){
    this.spotify.getNewReleases()
    .subscribe( (data:any) => {

       setTimeout(() => {
         this.nuevasCanciones = data;
         this.loading=false; 
       }, 1000); 

      },(errorServicio)=>{
        this.loading=false; 
        this.error=true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      });
  }
 
}
