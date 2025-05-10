import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BREEDS_URL } from 'src/app/constants/api-url';
import { Breed } from 'src/app/models/breed';

@Injectable({
  providedIn: 'root'
})
export class HttpBreedsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBreeds(): Observable<HttpResponse<any>> {
    let headers: HttpHeaders = new HttpHeaders({
      "x-api-key": "live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr"
    });

    return this.httpClient.get(BREEDS_URL, {
      headers,
      observe: "response"
    })
  }
}
