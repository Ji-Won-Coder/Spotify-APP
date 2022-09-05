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
    'Authorization':'Bearer BQAOPEhYbretknbyVk4LHW1OwMArvRla8fES3J3XeHTXHBuIpWuXtCVGlwujfeWC7zXXvnCDimD6LHmP516eCA8eQcbDOtoBVPlfg03Fmw2DjCZ1rjs'
  });
   this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
   


   //PERO QUE MIERDA TAN COMPLICADA, #EMOCION

 }

}
