import{NgModule} from'@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
imports:[
    ButtonModule,
    CardModule,
    CarouselModule
],
exports:[
    ButtonModule,
    CardModule,
    CarouselModule
]

})
export class PrimeModule{}