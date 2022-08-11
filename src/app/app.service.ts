import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class Appservice{
    
    constructor(private http: HttpClient){ }

      getJsonServerData():Observable<any>{
        console.log('Hiii');
        return this.http.get(`http://localhost:3000/time/`);
      }
      getContactData():Observable<any>{
        return this.http.get(`http://localhost:3000/contact/`);
      }
      getallJsonTodoData(){
        return this.http.get(`http://localhost:3000/profiles/`);
      }
}

