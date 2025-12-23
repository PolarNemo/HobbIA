import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/UsuarioService/usuario.service";
import { RouterLink } from "@angular/router";
@Component({
	selector: "app-olvidarcontrasena",
	templateUrl: "./olvidarcontrasena.component.html",
	styleUrls: ["./olvidarcontrasena.component.css"],
 imports: [RouterLink],
})
export class OlvidarContrasenaComponent implements OnInit {
	constructor() {}

  imagebackground : string = "assets/img/citypark.jpg";

	ngOnInit(): void {

	}
}
