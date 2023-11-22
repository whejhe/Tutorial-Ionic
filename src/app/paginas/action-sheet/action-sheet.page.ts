import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(
    private router:Router,
    private _actionSheetController: ActionSheetController,
    private _toastController:ToastController
    ) { }

  ngOnInit() {
  }

  async mostrar() {
    const actionSheet = await this._actionSheetController.create({
      backdropDismiss:false,
      header: '¿Eliminar Registro?',
      subHeader:'Esta opción no puede deshacerse',
      buttons: [
        {
          text: 'Si',
          role:'destructive',
          cssClass: 'colorRojo',
          data: {
            action: 'Eliminar',
          },
          icon: 'trash',
        },
        {
          text: 'No',
          cssClass: 'colorAzul',
          data: {
            action: 'No',
          },
          icon:'alert-outline',
        }
      ]
    });
    await actionSheet.present();
    const {data} = await actionSheet.onDidDismiss();
    if(!data || data.accion=='No') {
      console.log('Se cancela la operación');
      const toast = await this._toastController.create({
        message: 'Se cancela la operación',
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
    }
    else{
      console.log('Registro Eliminado');
      const toast = await this._toastController.create({
        message: 'Registro Eliminado',
        duration: 2000,
        position: 'middle'
      });
      await toast.present();
    }
  }
}
