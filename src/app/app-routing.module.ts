import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from 'modulos/usuarios/nav-bar/nav-bar.component';
import { NosotrosComponent } from 'modulos/usuarios/nosotros/nosotros.component';

const routes: Routes = [
  {path:"nosotros", component:NosotrosComponent},
{path:"hola",  component:NavBarComponent},
 { path: "**", redirectTo: "/" , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
