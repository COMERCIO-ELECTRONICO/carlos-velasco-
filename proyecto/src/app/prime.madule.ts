import{NgModule} from'@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {DragDropModule} from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
@NgModule({
imports:[
    ButtonModule,
    CardModule,
    CarouselModule,
    DragDropModule,
    TableModule,
    FormsModule,
    TabViewModule
],
exports:[
    ButtonModule,
    CardModule,
    CarouselModule,
    DragDropModule,
    TableModule,
    FormsModule,
    TabViewModule
]

})
export class PrimeModule{}