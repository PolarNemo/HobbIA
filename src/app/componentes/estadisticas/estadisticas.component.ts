import { Component, inject, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/UsuarioService/usuario.service";
import { Router, RouterOutlet } from "@angular/router";
@Component({
	selector: "app-estadisticas",
	templateUrl: "./estadisticas.component.html",
	styleUrls: ["./estadisticas.component.css"]
})
export class EstadisticasComponent implements OnInit {

  private _router = inject(Router);

	constructor() {}
	ngOnInit(): void {

	}

  IAMenuEstadisticas() {
    this._router.navigate(['/estadisticas']);
  }

  CerrarSesion() {
    this._router.navigate(['/login']);
  }

  IrAMenuPrincipal() {
    this._router.navigate(['/menuprincipal']);
  }

}
