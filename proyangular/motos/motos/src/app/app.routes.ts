// 05. Es el archivo que ANGULAR nos proporciona para definir las RUTAS de la aplicación o ENRUTAMIENTO.
// Que es el ENRUTAMIENTO, la acción que realizo al dar un click en un boton y llevo al usuario a alguna página de mi sitio Web
// En versiones anteriores este archivo lo deben generar manualmente.

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
//06. Definimos las rutas de la aplicación, declaramos una RUTA y el COMPONENTE asociado a esa RUTA
    {path: '', component:Home}, // Ruta Raiz
    {path: 'about', component:About}, // Ruta About
    {path: 'products', component:Products}, // Ruta Products
    {path: 'contact', component:Contact}, // Ruta Contact
//07 para evitar el error 404 Page Not Found
    {path: '**', redirectTo: ''} // Redirigir a la Ruta Raiz
];

//08. Luego de definir las rutas, Vamos a poder trabajarla desde nuestros componentes, Ahora iremos a la CLASE  COMPONENTS/HEADER/HEADER.TS
