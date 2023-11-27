import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { StarWarsService } from '../../servicios/star-wars.service';
import {personajes} from '../../interfaces/personajes';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  public personajes:personajes[] = [];
  public maxDatos:number=0;
  @ViewChild('mirefresh')miRefresh!:IonRefresher;
  constructor(private _starwarsService: StarWarsService) { }
  async ngOnInit() {
    this._starwarsService.numPagina = 1;
    let datos = await this._starwarsService.getPersonajes();
    this.maxDatos = datos.count;
    this.personajes.push(...datos.results);
  }
  async refresca(){
    if(this.personajes.length>=this.maxDatos){
      this.miRefresh.complete();
      this.miRefresh.disabled = true;
      this._starwarsService.numPagina = 1;
      return;
    }
    let datos = await this._starwarsService.getPersonajes();
    this.personajes.unshift(...datos.results);
    this.miRefresh.complete();
    console.log('this.personajes.length',this.personajes.length);
  }

}
