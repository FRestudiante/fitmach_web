import { Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { CatalogoComponent } from './catalogo/catalogo.component'; 
import { PerfilesComponent } from './perfiles/perfiles.component';

export const routes: Routes = [

    {path:'Catalogo',component:CatalogoComponent},
    {path:'Contactos',component:ContactosComponent},
    {path:'Perfiles',component:PerfilesComponent},
];
