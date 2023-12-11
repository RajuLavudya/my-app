import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private _userbank:HttpClient) { }
  getuserinfo():Observable<any>{
    return this._userbank.get("https://dummyjson.com/users")
    
  }
}
