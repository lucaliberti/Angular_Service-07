import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-genera-salva02',
  templateUrl: './genera-salva02.component.html',
  styleUrls: ['./genera-salva02.component.css'],

})

export class GeneraSalva02Component implements OnInit {

  mydata:number=0

  constructor( private service:MyserviceService) { }
  ngOnInit(): void {
    this.mydata=this.service.readNumber()
  }

  onLeggiNuovoDato(){
    this.mydata=this.service.readNumber()

  }

  onGeteraNuovoDato(){
    this.service.genNewNumber()
  }

}
