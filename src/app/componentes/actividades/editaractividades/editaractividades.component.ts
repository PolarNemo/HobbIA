import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-menuactividades",
	templateUrl: "./editaractividades.component.html",
	styleUrls: ["./editaractividades.component.css"],
})
export class EditarActividadesComponent implements OnInit {
	constructor() {}
	ngOnInit(): void {
    console.log("Menu Actividades")
	}
}
