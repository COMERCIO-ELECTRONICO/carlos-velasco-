import{NgModule} from'@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {DragDropModule} from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';

@NgModule({
imports:[
    ButtonModule,
    CardModule,
    CarouselModule,
    DragDropModule,
    TableModule
],
exports:[
    ButtonModule,
    CardModule,
    CarouselModule,
    DragDropModule,
    TableModule
]

})
export class PrimeModule{}