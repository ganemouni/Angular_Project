import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRepositoryService {
  public word;
 
  private _url:string ='https://api.github.com/users/ganemouni/repos?access_token=1cd44d23fe1f6319f116a5e40dd6cd5a94433764';
  // private _allrpes:string='https://api.github.com/search/repositories?q='+this.word;
  constructor(private http : HttpClient) { }

  createRepository():Observable<any>{
    return this.http.get(this._url);
  }

  public searchRepository(word):Observable<any>{
    let xlink='https://api.github.com/search/repositories?q='+word;
   return this.http.get(xlink);
   }

   public addtof(fav:any):Observable<any>{
     let _favlink="http://localhost:3000/posts";
      return this.http.post(_favlink,fav);
   }
   getfav():Observable<any>{
    let _favlink="http://localhost:3000/posts";
    return this.http.get(_favlink);
   }
   removef(remf:any):Observable<any>{
    let _favlink="http://localhost:3000/posts";
    return this.http.delete(`${_favlink}/${remf}`);
   }
}
