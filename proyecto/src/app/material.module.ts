
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
imports:[
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
],
exports:[
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
]


})
export class MaterialModule{}