import { Component, inject, OnInit } from "@angular/core";
import { UsuarioService } from "../../../service/UsuarioService/usuario.service";
import { Router } from "@angular/router";
@Component({
	selector: "app-menucuestionario",
	templateUrl: "./menucuestionario.component.html",
	styleUrls: ["./menucuestionario.component.css"],
})
export class MenuCuestionarioComponent implements OnInit {

  private readonly _router = inject(Router);

	constructor() {}
	ngOnInit(): void {

	}

  IrAEditarCuestionario() {
    this._router.navigate(['/examenes/editarcuestionario']);
  }

  IrARealizarCuestionario() {
    this._router.navigate(['/examenes/realizarcuestionario']);
  }
}
