import { Component, OnInit } from '@angular/core';
import { ReadJsonServiceService } from '../read-json-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 public a;
 public tColor;
  constructor(private _readJsonService:ReadJsonServiceService) { }

  ngOnInit() {
    
    this._readJsonService.getJSON().subscribe(data=>{
      console.log(data);
    
      this.a=data.cards.text;
      this.tColor=data.cards.textColor;
    })
}
}
