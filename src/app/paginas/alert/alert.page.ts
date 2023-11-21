import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private _alertController: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlertaDatos() {
    const alert = await this._alertController.create({
      backdropDismiss: false,
      header: 'Alerta',
      buttons: [
        {
          text:'OK',
          role:'ok'
        },
        {
          text:'Cancelar',
          role:'cancel'
        }
      ],
      inputs: [
        {
          placeholder: 'Name',
          name: 'Nombre'
        },
        {
          placeholder: 'Categoria (max 8 characters)',
          name: 'categoria',
          attributes: {
            maxlengh: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Puntuacion',
          min: 1,
          max: 10,
          name:'puntuacion'
        },
        {
          type: 'textarea',
          name:'descripcion',
          placeholder: 'De que va el juego',
        }
      ],
    });
    await alert.present();
    const datos = alert.onDidDismiss();
    console.log('datos', datos);
  }

  async mostrarAlert() {
    const alert = await this._alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Alerta simple',
      buttons: [
        {
          text:'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
  
    await alert.present();
    const datos = alert.onDidDismiss();
    console.log('datos',datos);
  }
};
