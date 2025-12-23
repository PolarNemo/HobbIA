import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { DetailSelect } from "../../interfaces/core/detailselect";

@Injectable({
	providedIn: "root",
})
export class ProveedorService {
	constructor(private http: HttpClient) {}

	userTablesDetail(): Observable<{
    readed : boolean,
    documentType: DetailSelect[],
    region: DetailSelect[],
    province: DetailSelect[],
    ubigeo: DetailSelect[]
  }> {
		const uri = `${environment.pathHobbia}Proveedor`;
		return this.http.get<{
      readed : boolean,
      documentType: DetailSelect[],
      region: DetailSelect[],
      province: DetailSelect[],
      ubigeo: DetailSelect[]
    }>(uri);
	}
}
