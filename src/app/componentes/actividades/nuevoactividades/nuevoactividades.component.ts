import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-menuactividades",
	templateUrl: "./nuevoactividades.component.html",
	styleUrls: ["./nuevoactividades.component.css"],
})
export class NuevoActividadesComponent implements OnInit {
	constructor() {}
	ngOnInit(): void {
    console.log("Nuevo Actividades")
	}
}
