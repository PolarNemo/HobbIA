import { Component, inject, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/UsuarioService/usuario.service";
import { Router, RouterOutlet } from "@angular/router";


@Component({
	selector: "app-actividades",
	templateUrl: "./actividades.component.html",
	styleUrls: ["./actividades.component.css"],
 imports: [RouterOutlet],
})
export class ActividadesComponent implements OnInit {

  private readonly _router = inject(Router);

	constructor() {}
	ngOnInit(): void {
    console.log("Actividades")
	}

  IAMenuPrincipal() {
    this._router.navigate(['../menuprincipal']);
  }

  CerrarSesion() {
    this._router.navigate(['/login']);
  }

  IrAMenuCuestionario() {
    this._router.navigate(['/actividades/menu']);
  }

  IrANuevaActividad() {
    this._router.navigate(['/actividades/nuevo']);
  }

  IrARelacionarActividad() {
    this._router.navigate(['/actividades/relacionar']);
  }
}
