import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DocumentTypes } from 'src/app/shared/models/document-type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })    
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'https://api.bancoink.biz/qa/signup/';
  apiKey = 'apiKey=030106';

  constructor(private http: HttpClient) { }

  getDocumentTypes(): Observable<DocumentTypes[]> {
    return this.http.get<DocumentTypes[]>(`${this.url}documentTypes?${this.apiKey}`);
  }

  getGenders() {
    return this.http.get(`${this.url}genders?${this.apiKey}`)
      .pipe(map((res) => {
        
        console.log('Payload servicio de generos', res);
        // La respuesta del servicio no trae la data de los generos,
        // entonces se mapeo la respuesta para cumplir con el requerimiento.

        return [
          {
            id: 1,
            name: 'Femenino'
          },
          {
            id: 2,
            name: 'Masculino'
          }
        ]
      }));
  }
}
