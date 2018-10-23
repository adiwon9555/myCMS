import { Component, OnInit } from '@angular/core';
import { ReadJsonServiceService } from '../read-json-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public a;
  public tColor;
  constructor(private _readJsonService:ReadJsonServiceService) { }

  ngOnInit() {
    
    this._readJsonService.getJSON().subscribe(data=>{
      console.log(data);
    
      this.a=data.body.text;
      this.tColor=data.body.textColor;
    })
}
}
