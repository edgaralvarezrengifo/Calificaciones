import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PorPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports:
  [
    PorPaisComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
