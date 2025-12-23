import { Component, inject, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/UsuarioService/usuario.service";
import { Router, RouterOutlet } from "@angular/router";
@Component({
	selector: "app-perfil",
	templateUrl: "./perfil.component.html",
	styleUrls: ["./perfil.component.css"],
 imports: [RouterOutlet],
})
export class PerfilComponent implements OnInit {

  private _router = inject(Router);

	constructor() {}
	ngOnInit(): void {

	}

  IAMenuPerfil() {
    this._router.navigate(['/perfil']);
  }

  IAModificarPerfil() {
    this._router.navigate(['/perfil/modificarperfil']);
  }

  IAMenuPrincipal() {
    this._router.navigate(['../menuprincipal']);
  }

  CerrarSesion() {
    this._router.navigate(['/login']);
  }

}
