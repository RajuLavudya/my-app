import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalaryService {

  constructor(private _httpClient:HttpClient) { }

  getusers():Observable<any>{
    return this._httpClient.get("https://api.imgflip.com/get_memes");
  }
}
