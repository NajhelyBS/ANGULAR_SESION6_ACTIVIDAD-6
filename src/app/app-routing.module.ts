import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacitacionesComponent } from 'modulos/usuarios/capacitaciones/capacitaciones.component';
import { ContactosComponent } from 'modulos/usuarios/contactos/contactos.component';
import { InicioComponent } from 'modulos/usuarios/inicio/inicio.component';
import { NosotrosComponent } from 'modulos/usuarios/nosotros/nosotros.component';
import { UsuariosModule } from 'modulos/usuarios/usuarios.module';

const routes: Routes = [
  {path:"inicio" , component: InicioComponent},
  {path:"nosotros", component: NosotrosComponent},
  {path:"capacitaciones", component: CapacitacionesComponent },
  {path:"contactos", component: ContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
