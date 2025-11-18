import { Component } from '@angular/core';

// 10. Automaticamente lo IMPORTA
// 11. Esto TECNICAMENTE que lo que me va a permitir es llamar la pagina sin tener que RE CARGAR la misma
// 12. Ahora iremos a Generar Nuestro Archivo HEADER.HTML
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-head',

// 09. Como vamos a trabajar con el ENRUTAMIENTO, debemos importar el MÓDULO ROUTER DE ANGULAR
  imports: [RouterModule],
  templateUrl: './head.html',
  styleUrl: './head.css',
})
export class Head {

}
