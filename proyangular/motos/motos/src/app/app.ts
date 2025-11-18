import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Head } from './components/head/head';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',

// 18. Para trabajar con las RUTAS, debemos importar el ROUTER OUTLET y para que llame nuestras PAGINAS debemos iMPORTAR nuestros COMPONENTES: HEADER y FOOTER, 
// Cuando lo seleccionas de la lista a la vez lo IMPORTA.
  imports: [RouterOutlet, Head, Footer],

// 19. Ahora Vamos al archivo APP.HTML desde donde voy a llamar a los COMPONENTES que he CREADO.
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('motos');
}
