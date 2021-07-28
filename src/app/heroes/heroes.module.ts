import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [//Declarar los componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//Visibilidad publica de componentes
        ListadoComponent
    ],
    imports:[//Importar Modulos
        CommonModule
    ]
})
export class HeroesModule{

}