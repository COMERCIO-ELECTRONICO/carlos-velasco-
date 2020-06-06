import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { AdminService } from '../services/admin.services';
import { ActivatedRoute, Params } from '@angular/Router';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {
  nomcarrera = '';
  titulolib = '';
  editoriarlib;
  libarea = '';
  datosgenerales;
  datoslib;
  datoscarrera;
  nombreau = '';
  nacioaut;
  autnom = '';
  idautor;
  idlibro;
  iduser;
  id;
  editList=[];
  edi;

  public isCollapsed = true;
  constructor(
    private readonly _AdminServicervice: AdminService,
    private readonly _router: Router,
    private rutaDatos: ActivatedRoute,
    private messageService: MessageService

  ) { }

  ngOnInit(): void {

    this.iduser = {
      id: this.rutaDatos.snapshot.params.id,
    };
    console.log('user id:')
    this.id = (this.iduser.id)
    console.log(this.id)
    this._AdminServicervice
      .metodoGet('http://localhost:1337/Autor')
      .subscribe((resultadoMetodoGet) => {
        this.datosgenerales = (resultadoMetodoGet)
      });
      this._AdminServicervice
      .metodoGet('http://localhost:1337/Libro')
      .subscribe((resultadoMetodoGet) => {
        this.datoslib = (resultadoMetodoGet)
      });
      this._AdminServicervice
      .metodoGet('http://localhost:1337/Carrera')
      .subscribe((resultadoMetodoGet) => {
        this.datoscarrera = (resultadoMetodoGet)
      });
  }

  
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
}
///INGRESO DE DATOS

  ingresarcarrera() {
    if (this.nomcarrera === '') {
      alert('NO A INGRESADO CARRERA')
    } else if (this.nomcarrera !== '') {
     
      this._AdminServicervice
        .metodoPost('http://localhost:1337/Carrera', {
          NOMBRE_CARRERA: this.nomcarrera
        })
        .subscribe((resultadoMetodopost) => {
          console.log('Respuest de pos');
          console.log(resultadoMetodopost);
          console.log('datos ingresados');
          alert('CARRERA INGRESADA')
          this.nomcarrera===''
          this._router .navigate(['/perfil-admin/'+this.id])
          
        });

    }
  
  }
  ingresardatos() {
    this._AdminServicervice
      .metodoPost('http://localhost:1337/Libro', {
        TITULO: this.titulolib,
        EDITORIAL: this.editoriarlib,
        AREA: this.libarea
      })
      .subscribe((resultadolibro: any) => {
        console.log('Respuest de pos');
        console.log({ resultadolibro });
        console.log('datos ingresados');
        this.idlibro = (resultadolibro.id)
        this._AdminServicervice
          .metodoPost('http://localhost:1337/Autor', {
            NOMBRE_AUTOR: this.autnom,
            NACIONALIDAD: this.nacioaut

          })
          .subscribe((resultadoautor: any) => {
            console.log('Respuest de Autor');
            console.log(resultadoautor);
            console.log('datos ingresados');
            this.idautor = (resultadoautor.id)
            console.log(this.idautor);

            this._AdminServicervice
              .metodoPost('http://localhost:1337/Libaut', {
                LIBRO_ID: this.idlibro,
                autor_id: this.idautor
              })
              .subscribe((resultadolibaut) => {
                console.log(resultadolibaut);

              })
            alert('DATOS INGRESADO')
          });

      });

  }

  ///ACTUALIZADORES

actualizarlibro(rowData){
 
this._AdminServicervice

 .metodoPatch('http://localhost:1337/Libro/'+rowData.id,{
   TITULO:rowData.TITULO,
   EDITORIAL:rowData.EDITORIAL,
   AREA:rowData.AREA

 })
 .subscribe((respuestainserlib)=>{
   console.log(respuestainserlib);
  
 })

 alert('DATOS ACTUALIZADOS')
  }

  actualizarcarrera(rowData){
    this._AdminServicervice
    .metodoPatch('http://localhost:1337/Carrera/'+rowData.id,{
      NOMBRE_CARRERA:rowData.NOMBRE_CARRERA
    
    })
    .subscribe((respuestainsercarrera)=>{
      console.log(respuestainsercarrera);
     
    })
    alert('DATOS ACTUALIZADOS')

  }
  actualizarautor(rowData){

    this._AdminServicervice
    .metodoPatch('http://localhost:1337/Autor/'+rowData.id,{
      NOMBRE_AUTOR:rowData.NOMBRE_AUTOR,
      NACIONALIDAD:rowData.NACIONALIDAD
    
    })
    .subscribe((respuestainserautor)=>{
      console.log(respuestainserautor);
     
    })
    alert('DATOS ACTUALIZADOS')

  }

//ELIMINADORES

  eliminarcarrera(rowData1){

    this._AdminServicervice
    .metodoDelete(`http://localhost:1337/Carrera?id=`+rowData1)
    .subscribe((resultadoeliminar)=>{
    console.log(resultadoeliminar);
    });
    alert('CARRERA ELIMINADA')

  }
  eliminarlibro(rowData){
    this._AdminServicervice
    .metodoDelete(`http://localhost:1337/Libro?id=`+rowData)
    .subscribe((resultadoeliminar)=>{
    console.log(resultadoeliminar);
    });

    alert('LIBRO ELIMINADO')
 
  }
eliminarautro(rowData){
  this._AdminServicervice
  .metodoDelete(`http://localhost:1337/Autor?id=`+rowData)
  .subscribe((resultadoeliminar)=>{
  console.log(resultadoeliminar);
  });

  alert('AUTOR ELIMINADO')


}



















}
