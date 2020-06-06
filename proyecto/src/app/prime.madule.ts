import{NgModule} from'@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {DragDropModule} from 'primeng/dragdrop';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
imports:[
    ButtonModule,
    CardModule,
    CarouselModule,
    DragDropModule,
    TableModule,
    FormsModule,
    TabViewModule,
    ToastModule,
    ToolbarModule
],
exports:[
    ButtonModule,
    CardModule,
    CarouselModule,
    DragDropModule,
    TableModule,
    FormsModule,
    TabViewModule,
    ToastModule,
    ToolbarModule
]

})
export class PrimeModule{}