import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { personajes } from 'src/app/interfaces/personajes';
import { StarWarsService } from 'src/app/servicios/star-wars.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild('infiniteScroll') infinito!:IonInfiniteScroll;
  public personajes: personajes[] = [];
  public maxDatos:number=0;
  constructor(private _starwarsService: StarWarsService) { }

  async ngOnInit() {
    let datos = await this._starwarsService.getPersonajes();
    this.maxDatos = datos.count;
    this.personajes.push(...datos.results);
  }
  async loadData() {
    if(this.personajes.length>=this.maxDatos){
      this.infinito.complete();
      this.infinito.disabled = true;
      this._starwarsService.numPagina = 1;
      return;
    }
    let datos = await this._starwarsService.getPersonajes();
    this.personajes.push(...datos.results);
    this.infinito.complete();
    console.log('this.personajes.length',this.personajes.length);
  }

}
