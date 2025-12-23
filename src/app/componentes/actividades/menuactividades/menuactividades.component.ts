import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";

@Component({
	selector: "app-menuactividades",
	templateUrl: "./menuactividades.component.html",
	styleUrls: ["./menuactividades.component.css"]
})
export class MenuActividadesComponent implements OnInit {



  private readonly _router = inject(Router);

	constructor() {}
	ngOnInit(): void {
    console.log("Menu Actividades")
	}



  IrARealizarActividad() {
    this._router.navigate(['/examenes/nuevocuestionario']);
  }

  IrAEditarActividad() {
    this._router.navigate(['/examenes/nuevocuestionario']);
  }
}

interface Actividad{
  id: number,
  codigo : string,
  actividad : string,
  cantUsuario : string
}
