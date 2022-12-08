import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { HttpHeaders } from '@angular/common/http';

export interface ICalificacion {
  nombreEstudiante: string;
  apellidoEstudiante: string;
  nombreMateria: string;
  nombreNota: string;
  valorNota: number;
}

export interface ICalificacionResp {
  ID: number;
  NombreNota: string;
  Valor: number;
  ID_Alumno: number;
  ID_Materia: number;
}

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})

export class PorPaisComponent {
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  calificaciones: ICalificacionResp[] = [];
  mensajeError: string = '';
  placeHolder: string = 'Buscar País...';
  termino: string = '';
  mostrarSugerencias:boolean = false;

  form = {
    nombreEstudiante: '',
    apellidoEstudiante: '',
    nombreMateria: '',
    nombreNota: '',
    valorNota: 0.0
  };

  constructor(private paisService: PaisService, private http: HttpClient) {}

  registrarCalificacion()
  {
    console.log('Cargue de Calificaciones');
    const response:ICalificacionResp[] = [];
    const calificacion: ICalificacion = {nombreEstudiante:this.form.nombreEstudiante,
                                         apellidoEstudiante:this.form.apellidoEstudiante,
                                         nombreMateria:this.form.nombreMateria,
                                         nombreNota:this.form.nombreNota,
                                         valorNota: this.form.valorNota};

    let params = new HttpParams();
    params.set('nombreEstudiante', this.form.nombreEstudiante);
    params.set('apellidoEstudiante', this.form.apellidoEstudiante);
    params.set('nombreMateria', this.form.nombreMateria);
    params.set('nombreNota', this.form.nombreNota);
    params.set('valorNota', this.form.valorNota); 

    // Simple POST request with a JSON body and response type <any>
    this.http.post<ICalificacionResp[]>('http://10.0.14.170/api/calificaciones', calificacion) 
    .subscribe(data => {
      debugger;
      const result:ICalificacionResp[] = data;
      console.log(this.calificaciones);
      this.calificaciones = [];
      result.forEach(element => {
          if(element.NombreNota != "Nota 0"){
            this.calificaciones.push(element);   
          }
      });
    });
  }  
}
