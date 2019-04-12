import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  //variable tipo string
  titulo: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
          text: 'OK',
          handler: (blah) => {
            console.log('Botón Ok');
          }
        }     
      ]
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'ingresa el nuevo titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          //data es el objeto que almacena la informacion que es puesta en los formularios
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await alert.present();
  }

}
