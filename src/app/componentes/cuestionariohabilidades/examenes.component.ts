import { Component, inject, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/UsuarioService/usuario.service";
import { Router, RouterOutlet } from "@angular/router";
@Component({
	selector: "app-examenes",
	templateUrl: "./examenes.component.html",
	styleUrls: ["./examenes.component.css"],
 imports: [RouterOutlet],
})
export class ExamenesComponent implements OnInit {

  private _router = inject(Router);

	constructor() {}
	ngOnInit(): void {

	}

  IAMenuPrincipal() {
    this._router.navigate(['../menuprincipal']);
  }

  CerrarSesion() {
    this._router.navigate(['/login']);
  }

  IrAMenuCuestionario() {
    this._router.navigate(['/examenes/menu']);
  }

  IrANuevoCuestionario() {
    this._router.navigate(['/examenes/nuevocuestionario']);
  }
}
