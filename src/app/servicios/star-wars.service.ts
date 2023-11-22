import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/componente';
import { Datos } from '../interfaces/personajes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }
  public url:string = environment.urlDatos;
  getPersonajes() {
    return new Promise<Datos>((resolve, reject) => {
        this.http.get<Datos>(this.url).subscribe({
            next: (datos) => {
                resolve(datos);
            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
                reject(err);
            }
        });
    });
}
}
