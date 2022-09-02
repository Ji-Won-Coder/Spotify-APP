import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


// para utilizar este servicio, tengo que inyectarlo para ver la informacion y ejecutarlo
@Injectable({providedIn:'root'} )  

export class SpotifyService {
 

  constructor( private http: HttpClient) { 
    console.log('spotify service listo');
  }
  
 getNewReleases (){

  const headers = new HttpHeaders({
    'Authorization':'Bearer BQC6DkpDxvRk8t2G_uvSV5gwGzaeAP98JM-JuDwfGV60e4OBqIhKoMlflru1wXNXtkbBrlDysdGkMebLftiVub1akbbgbvLuChHxioBejdpHDkIgpto'
  });
   this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
   .subscribe( data => {
     console.log (data);
   });

 }

}
