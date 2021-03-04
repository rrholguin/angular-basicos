import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ /* Los componentes que son parte de este modulo */
    HeroeComponent,
    ListadoComponent
  ],
  exports: [ /* lo que se pretende hacer publico */
    ListadoComponent
  ],
  imports: [ /* Los modulos a utilizar para este modulo o grupo de componentes */
    CommonModule
  ]
})
export class HeroesModule {}
