import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/UsuarioService/usuario.service";
import { RouterLink, Router } from "@angular/router";
@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
 imports: [RouterLink],
})
export class LoginComponent implements OnInit {
	constructor(public _router: Router) {}

  imagebackground : string = "assets/img/citypark.jpg";

	ngOnInit(): void {

	}

  IngresarAHobbIA() {
    this._router.navigate(['/menuprincipal']);
  }
}
