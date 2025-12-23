import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/UsuarioService/usuario.service";
import { RouterLink } from "@angular/router";
@Component({
	selector: "app-registrarse",
	templateUrl: "./registrarse.component.html",
	styleUrls: ["./registrarse.component.css"],
 imports: [RouterLink],
})
export class RegistrarseComponent implements OnInit {
	constructor() {}

  imagebackground : string = "assets/img/citypark.jpg";

	ngOnInit(): void {

	}
}
