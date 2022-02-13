import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-genera-salva03',
  templateUrl: './genera-salva03.component.html',
  styleUrls: ['./genera-salva03.component.css'],
  providers: [MyserviceService]

})

export class GeneraSalva03Component implements OnInit {

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
