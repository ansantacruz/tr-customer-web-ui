import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Ofertas } from 'src/app/model/Ofertas';
import { AuthServiceService } from '../../../services/auth-service.service';


@Component({
  selector: 'app-ofertas-tab',
  templateUrl: './ofertas-tab.component.html',
  styleUrls: ['./ofertas-tab.component.scss'],
})
export class OfertasTabComponent implements OnInit {

  ofertas = new Ofertas();

  constructor(
    private readonly authServiceService: AuthServiceService,
    private readonly router: Router,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.ofertas.ofertas = [
      {
          "autor" : {
              "nombre" : "Andres Santacruz",
              "identificacion": "191911",
              "calificacion" : 4.9,
              "direccion" : " Calle 123",
              "avatar": " data:image/png;base64,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"
          },
          "ofertaRealizada" : {
              "ofertaTodo" : "Si",
              "valorOferta" : "200000",
              "negociable": "Si",
              "detalle": [
                  {
                      "nombreRepuesto": "",
                      "marcaRepuesto": "",
                      "tipoRepuesto": "",
                      "motocicleta": {
                          "nombreMotocicleta" : "",
                          "marcaMotocicleta" : "",
                          "modeloMotocicleta": "",
                          "tipoMotocicleta": ""
                      },
                      "valorUnitario": "20000",
                      "valorTotal": "400000",
                      "cantidad": 2
                  }
              ]
          }
      },
      {
          "autor" : {
              "nombre" : "Carlos Trujillo",
              "identificacion": "191911",
              "calificacion" : 5,
              "direccion" : " Calle 123",
              "avatar": ""
          },
          "ofertaRealizada" : {
              "ofertaTodo" : 'Si',
              "valorOferta" : "143000",
              "negociable": 'Si',
              "detalle": [
                  {
                      "nombreRepuesto": "",
                      "marcaRepuesto": "",
                      "tipoRepuesto": "",
                      "motocicleta": {
                          "nombreMotocicleta" : "",
                          "marcaMotocicleta" : "",
                          "modeloMotocicleta": "",
                          "tipoMotocicleta": ""
                      },
                      "valorUnitario": "20000",
                      "valorTotal": "400000",
                      "cantidad": 2
                  }
              ]
          }
      },
      {
          "autor" : {
              "nombre" : "John Gamboa",
              "identificacion": "191911",
              "calificacion" : 4.8,
              "direccion" : " Calle 123",
              "avatar": ""
          },
          "ofertaRealizada" : {
              "ofertaTodo" : 'No',
              "valorOferta" : "143000",
              "negociable": 'No',
              "detalle": [
                  {
                      "nombreRepuesto": "",
                      "marcaRepuesto": "",
                      "tipoRepuesto": "",
                      "motocicleta": {
                          "nombreMotocicleta" : "",
                          "marcaMotocicleta" : "",
                          "modeloMotocicleta": "",
                          "tipoMotocicleta": ""
                      },
                      "valorUnitario": "20000",
                      "valorTotal": "400000",
                      "cantidad": 2
                  }
              ]
          }
      },
      {
          "autor" : {
              "nombre" : "Daniel Comercial",
              "identificacion": "191911",
              "calificacion" : 4,
              "direccion" : " Calle 123",
              "avatar": ""
          },
          "ofertaRealizada" : {
              "ofertaTodo" : 'Si',
              "valorOferta" : "1000000",
              "negociable": 'No',
              "detalle": [
                  {
                      "nombreRepuesto": "",
                      "marcaRepuesto": "",
                      "tipoRepuesto": "",
                      "motocicleta": {
                          "nombreMotocicleta" : "",
                          "marcaMotocicleta" : "",
                          "modeloMotocicleta": "",
                          "tipoMotocicleta": ""
                      },
                      "valorUnitario": "20000",
                      "valorTotal": "400000",
                      "cantidad": 2
                  }
              ]
          }
      },
      {
          "autor" : {
              "nombre" : "Moto selva",
              "identificacion": "191911",
              "calificacion" : 3.2,
              "direccion" : " Calle 123",
              "avatar": ""
          },
          "ofertaRealizada" : {
              "ofertaTodo" : 'No',
              "valorOferta" : "980000",
              "negociable": 'Si',
              "detalle": [
                  {
                      "nombreRepuesto": "",
                      "marcaRepuesto": "",
                      "tipoRepuesto": "",
                      "motocicleta": {
                          "nombreMotocicleta" : "",
                          "marcaMotocicleta" : "",
                          "modeloMotocicleta": "",
                          "tipoMotocicleta": ""
                      },
                      "valorUnitario": "20000",
                      "valorTotal": "400000",
                      "cantidad": 2
                  }
              ]
          }
      },
      {
          "autor" : {
              "nombre" : "Full gass",
              "identificacion": "191911",
              "calificacion" : 2.0,
              "direccion" : " Calle 123",
              "avatar": ""
          },
          "ofertaRealizada" : {
              "ofertaTodo" : 'No',
              "valorOferta" : "9000000",
              "negociable": 'Si',
              "detalle": [
                  {
                      "nombreRepuesto": "",
                      "marcaRepuesto": "",
                      "tipoRepuesto": "",
                      "motocicleta": {
                          "nombreMotocicleta" : "",
                          "marcaMotocicleta" : "",
                          "modeloMotocicleta": "",
                          "tipoMotocicleta": ""
                      },
                      "valorUnitario": "20000",
                      "valorTotal": "400000",
                      "cantidad": 2
                  }
              ]
          }
      },{
          "autor" : {
              "nombre" : "Andres Santacruz",
              "identificacion": "191911",
              "calificacion" : 4.9,
              "direccion" : " Calle 123",
              "avatar": ""
          },
          "ofertaRealizada" : {
              "ofertaTodo" : 'No',
              "valorOferta" : "143000",
              "negociable": 'Si',
              "detalle": [
                  {
                      "nombreRepuesto": "",
                      "marcaRepuesto": "",
                      "tipoRepuesto": "",
                      "motocicleta": {
                          "nombreMotocicleta" : "",
                          "marcaMotocicleta" : "",
                          "modeloMotocicleta": "",
                          "tipoMotocicleta": ""
                      },
                      "valorUnitario": "20000",
                      "valorTotal": "400000",
                      "cantidad": 2
                  }
              ]
          }
      }
  ];

  console.log(this.ofertas.ofertas)
  }

  currencyFormat(amount: string, requiredZero = false): string {
    if(requiredZero && !amount) {
        amount = '0';
    }
    amount = amount.replace(/\D/g, '');
    if (amount === '' && !requiredZero) {
        return amount;
    }
    return `$${parseInt(amount, 0).toLocaleString()}`;
}

  async pasarVendedor(): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento ',
      duration: 1500,
    });
    loading.present();
    await this.authServiceService.login('VENDEDOR');
    this.router.navigate(['tabs/compras']);
  }
}
