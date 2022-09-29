import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  server = "http://localhost:3000"

  constructor(
    protected _http: HttpClient
  ) { }

  getInfos(): Observable<any>{
    return this._http.get(this.server+'/infos')
  }
  getFormations(): Observable<any>{
    return this._http.get(this.server+'/formations')
  }
  getCompetences(): Observable<any>{
    return this._http.get(this.server+'/competences')
  }
  getExperiences(): Observable<any>{
    return this._http.get(this.server+'/experiences')
  }
  getLangues(): Observable<any>{
    return this._http.get(this.server+'/langues')
  }
  getInterets(): Observable<any>{
    return this._http.get(this.server+'/interets')
  }




}
