import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActividadService } from "../../../service/ActividadService/actividad.service";
import { Actividad } from "../../../interfaces/usuario/actividad.interface";

@Component({
	selector: "app-nuevoproveedor",
	templateUrl: "./nuevoproveedor.component.html",
	styleUrls: ["./nuevoproveedor.component.css"]
})
export class NuevoProveedorComponent implements OnInit {

  private readonly _actividadService = inject(ActividadService);
  private readonly _router = inject(Router);

  g_listaActividades : Actividad[] = [];

	constructor() {}
	ngOnInit(): void {
    console.log("Menu Actividades")
	}

  IrARealizarActividad(actividadId : number) {
    this._router.navigate(['/examenes/nuevocuestionario']);
  }

  IrAEditarActividad(actividadId : number) {
    this._router.navigate(['/examenes/nuevocuestionario']);
  }
}
