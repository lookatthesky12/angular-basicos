import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [//Declarar los componentes
        ContadorComponent
    ],
    exports:[//Visibilidad publica de componentes
        ContadorComponent
    ],
    imports:[//Importar Modulos
        CommonModule
    ]
})
export class ContadorModule{

}