import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http'
import { IProducto } from '../interface/iproducto';


// import {IHomeComponent } from '../components/home/home.component';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
// import { map, filter, scan } from 'rxjs/operators';
  // import 'rxjs/add/operator/map';
  // import 'rxjs/Rx';

   //import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  


@Injectable({
  providedIn: 'root'
})

export class ApinetService {

  constructor(private http: HttpClient) { 

    
  }

  // getProductos(): Observable<IProducto> {
     getProductos() {
   
    let prod:IProducto = {
      id: 1,
      nombre: "Producto1",
      cantidad: 2,
      precio: 1000
    }
    console.log('ok'); 

    let prueba: Observable<string>;

let listaproductos :IProducto[];

    console.log('APinetService.getProductos')
    this.http.get('http://localhost:49570/api/productos')  
    .subscribe(data => {
      console.log(data);
      return data;
    });


//  this.http.get('http://localhost:49570/api/productos')
// .map( res =>{
//     console.log( res );
//      return res.json();
// })

    //  return this.http.get('http://localhost:49570/api/productos');

     
    //         .map((response: Response) =><IProducto[]> response.json())
  
          }



    // console.log('APinetService.getProductos')
    // // this.http.get('http://www.coralmedica.cl/api/productos')
    // this.http.get('http://localhost:49570/api/productos')    
    // .subscribe(data => {
    //   console.log(data);
    //   return data;
    // });

    // return this.http.get('http://localhost:49570/api/productos');

   


}
