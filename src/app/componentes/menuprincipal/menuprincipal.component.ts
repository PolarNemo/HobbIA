import { Component, inject, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/UsuarioService/usuario.service";
import { Router, RouterLink } from "@angular/router";
@Component({
	selector: "app-menuprincipal",
	templateUrl: "./menuprincipal.component.html",
	styleUrls: ["./menuprincipal.component.css"],
 imports: [RouterLink],
})
export class MenuPrincipalComponent implements OnInit {
	constructor() {}

  private _usuarioService = inject(UsuarioService);
  private _router = inject(Router);

	ngOnInit(): void {
		/*
    this._usuarioService.Find("46257869").subscribe(response => {
			console.log(response, "User");
		});
    */
	}

  CerrarSesion() {
    this._router.navigate(['/login']);
  }
}
