import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    NavBarComponent,
    NosotrosComponent,
  ],
  imports: [
    CommonModule,
  ],

  exports: [
    NavBarComponent,
    NosotrosComponent,
  ],
 
})
export class UsuariosModule { }
