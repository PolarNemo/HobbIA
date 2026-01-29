import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActividadService } from "../../../service/ActividadService/actividad.service";
import { Actividad } from "../../../interfaces/usuario/actividad.interface";

@Component({
	selector: "app-gestionarproveedor",
	templateUrl: "./gestionarproveedor.component.html",
	styleUrls: ["./gestionarproveedor.component.css"]
})
export class GestionarProveedorComponent implements OnInit {

  private readonly _actividadService = inject(ActividadService);
  private readonly _router = inject(Router);

  g_listaActividades : Actividad[] = [];

	constructor() {}
	ngOnInit(): void {
    console.log("Gestionar Proveedor")
	}

  IrARealizarActividad(actividadId : number) {
    this._router.navigate(['/examenes/nuevocuestionario']);
  }

  IrAEditarActividad(actividadId : number) {
    this._router.navigate(['/examenes/nuevocuestionario']);
  }
}
