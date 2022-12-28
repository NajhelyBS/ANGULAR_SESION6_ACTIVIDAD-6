import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    InicioComponent,
    NosotrosComponent,
    CapacitacionesComponent,
    ContactosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],

  exports: [
    NavBarComponent,
    InicioComponent,
    NosotrosComponent,
    CapacitacionesComponent,
    ContactosComponent,
  ],
 
})
export class UsuariosModule { }
