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
      'Authorization':' Bearer BQDp2Wb--jOH7d70sIsW9GY2ErGI_XhYSEFeoy_P7RuLlD_o2xrFxcL51pOJTWVYtrQWZjjVYEQqSLj5smdUfihEiWEvq7d47-c1enqv0mwzR7O4HCU'
    });
    return this.http.get(url,{headers});

  }
  
 getNewReleases (){    
   return this.getQuery('browse/new-releases')
   .pipe( map( (data:any) => data['albums'].items ));
  }


  getArtistas(termino:string){
   return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
   .pipe(map((data: any) => data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
    //.pipe(map((data: any) => data['artists'].items));
  }
  getTopTracks(id:string){  //llamar y centralizar todas mis peticiones al mismo servicio
    console.log(id)
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map((data:any )=> data['tracks']));
   
  }

}