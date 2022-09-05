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
      'Authorization':'Bearer BQDqhzpaHjrjAzLQArjeuEF28fruCIO-vovq1tTu8Slx99VOUoaIPuzpsdBSFr9LLR4ArWdGgMa1o4fJ18TO49t-JGXK-G6-iR9OPy3hbaGAmQUVlp4'
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