import { Component, OnInit } from '@angular/core';
import { ReadJsonServiceService } from '../read-json-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public a;
  public tColor;
  constructor(private _readJsonService:ReadJsonServiceService) { }

  ngOnInit() {
    
    this._readJsonService.getJSON().subscribe(data=>{
      console.log(data);
    
      this.a=data.header.text;
      this.tColor=data.header.textColor;
    })
    
  }
  

}
