import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/componente';
import { ComponentesService } from '../../servicios/componentes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public componentes:Componente[] = [
    {
      nombre:'action-sheet y toast',
      ruta:'/action-sheet',
      color:'primary',
      icono:'add'
    },
    {
      nombre:'alert',
      ruta:'/alert',
      color:'secondary',
      icono:'add-circle'
    },
    {
      nombre:'card',
      ruta:'/card',
      color:'tertiary',
      icono:'airplane'
    },
    {
      nombre:'infinite-scroll',
      ruta:'/infinite-scroll',
      color:'success',
      icono:'alarm'
    },
    {
      nombre:'refresher',
      ruta:'/refresher',
      color:'warning',
      icono:'american-football'
    }
  ];
  ComponentesService: any;
  constructor() { }

  async ngOnInit(): Promise<void> {
  try{
    this.componentes = await this.ComponentesService.getPersonajes();
  }catch(err:any){
    console.log('err_message',err.message);
  }
}

}
