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

  @ViewChild('infiniteScroll')
  infinito!: IonInfiniteScroll;
  public personajes: personajes[] = [];
  constructor(private _starwarsService: StarWarsService) { }

  async ngOnInit() {
    let datos = await this._starwarsService.getPersonajes();
    this.personajes.push(...datos.results);
  }
  async loadData() {
    let datos = await this._starwarsService.getPersonajes();
    this.personajes.push(...datos.results);
    this.infinito.complete();
    // setTimeout(() => {
    //   this.datos.push(...new Array(20));
    //   this.infinito.complete();
    //   if(this.datos.length>100){
    //     this.infinito.disabled = true;
    //   }
    // }, 800);
  }

}
