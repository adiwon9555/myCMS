import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpParams , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonServiceService {

  constructor(private http:HttpClient) { }
  public getJSON(): Observable<any> {
         return this.http.get("./assets/jsonFiles/app-config.json");
                         
                         

     }
}
