import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/componente'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public componentes:Componente[] = [
    {
      nombre:'action-sheet y toast',
      ruta:'action-sheet',
      color:'primary',
      icono:'add'
    },
    {
      nombre:'alert',
      ruta:'alert',
      color:'secondary',
      icono:'add-circle'
    },
    {
      nombre:'card',
      ruta:'card',
      color:'tertiary',
      icono:'airplane'
    }
  ];
  constructor() { }

ngOnInit(): void {
  // Function body goes here
}

}
