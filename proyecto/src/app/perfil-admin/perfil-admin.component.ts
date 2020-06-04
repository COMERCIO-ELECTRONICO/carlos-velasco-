import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { AdminService } from '../services/admin.services';
import { ActivatedRoute, Params } from '@angular/Router';
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
  datoslibro;
  datosautor;
  datoscarrera;
  nombreau = '';
  nacioaut;
  autnom = '';
  idautor;
  idlibro;
  iduser;
  id;
  public isCollapsed = true;
  constructor(
    private readonly _AdminServicervice: AdminService,
    private readonly _router: Router,
    private rutaDatos: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.iduser = {
      id: this.rutaDatos.snapshot.params.id,
    };
    console.log('user id:')
    this.id = (this.iduser.id)
    console.log(this.id)
    this._AdminServicervice
      .metodoGet('http://localhost:1337/Libro')
      .subscribe((resultadoMetodoGet) => {
        this.datoslibro = (resultadoMetodoGet)
      });
    this._AdminServicervice
      .metodoGet('http://localhost:1337/Autor')
      .subscribe((resultadoMetodoGet) => {
        this.datosautor = (resultadoMetodoGet)
      });
    this._AdminServicervice
      .metodoGet('http://localhost:1337/Carrera')
      .subscribe((resultadoMetodoGet) => {
        this.datoscarrera = (resultadoMetodoGet)
      });
  }

  actualizarautor() { }

  eliminarautor() { }

  ingresarcarrera() {
    if (this.nomcarrera === '') {
      alert('NO A INGRESADO CARRERA')
    } else if (this.nomcarrera !== '') {
      alert('ingresa')
      this._AdminServicervice
        .metodoPost('http://localhost:1337/Carrera', {
          NOMBRE_CARRERA: this.nomcarrera
        })
        .subscribe((resultadoMetodopost) => {
          console.log('Respuest de pos');
          console.log(resultadoMetodopost);
          console.log('datos ingresados');
          alert('CARRERA INGRESADA')
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



}
