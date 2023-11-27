import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/componente';
import { Datos } from '../interfaces/personajes';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StarWarsService {

    constructor(private _http: HttpClient) { }
    public url: string = environment.urlDatos;
    public numPagina:number =1;
    getPersonajes() {
        return new Promise<Datos>((resolve, reject) => {
            this._http.get<Datos>(`$(this.url)/?page=$(this.numPagina)`).subscribe({
                next: (datos) => {
                    resolve(datos);
                    this.numPagina++;
                },
                error: (err: HttpErrorResponse) => {
                    console.log(err);
                    reject(err);
                }
            });
        });
    }
}
