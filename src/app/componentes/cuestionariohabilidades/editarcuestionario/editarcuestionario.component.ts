import { Component, OnInit } from "@angular/core";
//import { UsuarioService } from "../../../service/UsuarioService/usuario.service";

@Component({
	selector: "app-editarcuestionario",
	templateUrl: "./editarcuestionario.component.html",
	styleUrls: ["./editarcuestionario.component.css"],
})
export class EditarCuestionarioComponent implements OnInit {
	constructor() {}
	ngOnInit(): void {
    console.log("Editar Cuestionario de Componente")
	}
}
