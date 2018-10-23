import { Component, OnInit } from '@angular/core';
import { ReadJsonServiceService } from '../read-json-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 public a;
 public tColor;
  constructor(private _readJsonService:ReadJsonServiceService) { }

  ngOnInit() {
    
    this._readJsonService.getJSON().subscribe(data=>{
      console.log(data);
    
      this.a=data.footer.text;
      this.tColor=data.footer.textColor;
    })
}
}
