import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

//interface albums {
  //href: string,
  //items: [],
  //limit: number,
  //next: string,
  //offset: number
  //previous: any
  //total: 100
//}

// para utilizar este servicio, tengo que inyectarlo para ver la informacion y ejecutarlo
@Injectable({providedIn:'root'} )  

export class SpotifyService {
 

  constructor( private http: HttpClient) { 
    console.log('spotify service listo');
  }

  getQuery(query:string){
    //centraliza toda la petición
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBojc_RetnMvKQy7bHg_LGqCOJgYop8FcaX1AdYQY0EFkaTfFbQNnslE_u11r-SgeF8T4IR8PFQ5-79VsH8zg26RHDdBKp0j4eyzif0FlrItZf09ac'
    });
    return this.http.get(url,{headers});

  }
  
 getNewReleases (){    
   return this.getQuery('browse/new-releases?limit=20')
   .pipe( map( (data:any) => data['albums'].items ));
  }


  getArtista(termino:string){
   return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
   .pipe(map((data: any) => data['artists'].items));
  }
}