import{NgModule} from'@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {DragDropModule} from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
@NgModule({
imports:[
    ButtonModule,
    CardModule,
    CarouselModule,
    DragDropModule,
    TableModule,
    FormsModule
],
exports:[
    ButtonModule,
    CardModule,
    CarouselModule,
    DragDropModule,
    TableModule,
    FormsModule
]

})
export class PrimeModule{}