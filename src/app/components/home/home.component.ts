import { Component, OnInit } from '@angular/core';
import { ApinetService} from '../../services/apinet.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: any[] = [];
  result: any;
  //constructor(private apiservice: ApinetService, private http: HttpClient ) { 
    constructor(private http: HttpClient ) { 

    // this.http.get('http://localhost:49570/api/productos')
    // .subscribe(data => {
    //   console.log(data);
    // }) 

    // this.result = this.apiservice.getProductos()

  }

  ngOnInit() {
  }

}
