import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";


@Component({
	selector: "app-actividades",
	templateUrl: "./proveedor.component.html",
	styleUrls: ["./proveedor.component.css"],
 imports: [RouterOutlet],
})
export class ProveedorComponent implements OnInit {

  private readonly _router = inject(Router);

	constructor() {}
	ngOnInit(): void {
    console.log("Proveedor")
	}

  IAMenuPrincipal() {
    this._router.navigate(['../menuprincipal']);
  }

  CerrarSesion() {
    this._router.navigate(['/login']);
  }

  IrAMenuProveedor() {
    this._router.navigate(['/proveedor/menu']);
  }

  IrANuevaProveedor() {
    this._router.navigate(['/proveedor/nuevo']);
  }

  IrAGestionarProveedor() {
    this._router.navigate(['/proveedor/gestionar']);
  }
}
