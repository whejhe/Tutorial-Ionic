import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild('infiniteScroll')
  infinito!: IonInfiniteScroll;
  public datos: any[] = new Array(20);
  constructor() { }

  ngOnInit() {
  }
  loadData() {
    setTimeout(() => {
      this.datos.push(...new Array(20));
      this.infinito.complete();
    }, 800);
  }

}
