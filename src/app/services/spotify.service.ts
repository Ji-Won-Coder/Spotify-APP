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
    'Authorization':'Bearer BQBUTAxucdXGX_llhFswqF8VLW9oP4-ndAgNWUWQk80lmJ4ToZv1kVIbx-G8pIWUxxzT-Ukp2Ay2-7lRO9h8B6yRqb5aY3eZLfOD078onTpntrCp6PY'
  });
   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }


  getArtista(termino:string){
  const headers = new HttpHeaders({
    'Authorization':'Bearer BQBUTAxucdXGX_llhFswqF8VLW9oP4-ndAgNWUWQk80lmJ4ToZv1kVIbx-G8pIWUxxzT-Ukp2Ay2-7lRO9h8B6yRqb5aY3eZLfOD078onTpntrCp6PY'
  });
   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`,{headers});
  }
 
}




