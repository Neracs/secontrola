import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/service/data.service';


@Component({
  selector: 'app-bar-search-people',
  templateUrl: './bar-search-people.component.html',
  styleUrls: ['./bar-search-people.component.css']
})
export class BarSearchPeopleComponent implements OnInit {

    listResult: any[] = [];


    
  constructor(private route: Router, private dataService: DataService ) { }

  ngOnInit(): void {
  }

  search = () => {
    let valor = (document.getElementById("txt-search") as HTMLInputElement).value
    this.listResult = [];
    let temp = this.dataService.data.filter((x: any)=>x.nombre_apellido.toUpperCase().includes(valor.toUpperCase()) || x.numero_documento.includes(valor));
    temp.forEach((y: any) => {
     this.listResult.push(y);
    });
  };

  goDetalle = (numero_documento:string,item:any) => {
    sessionStorage.setItem("funcionario", item);
    this.route.navigateByUrl("search/"+numero_documento);   
  }
}