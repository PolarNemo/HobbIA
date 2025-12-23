import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { DetailSelect } from "../../interfaces/core/detailselect";
import { Usuario } from "../../interfaces/usuario/usuario.interface";

@Injectable({
	providedIn: "root",
})
export class UsuarioService {
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

	Find(documentNumber: string): Observable<Usuario> {
		const uri = `${environment.pathHobbia}Usuario/${documentNumber}`;
		return this.http.get<Usuario>(uri);
	}
	List(filterDocumentNumber: string): Observable<Usuario[]> {
    let uri = ``;
    if(filterDocumentNumber.length == 0){
      uri = `${environment.pathHobbia}Usuario`;
    }else{
      uri = `${environment.pathHobbia}Usuario?DocumentNumber=${filterDocumentNumber}`;
    }

		return this.http.get<Usuario[]>(uri);
	}
	Create(body: UserUpdateorCreateCommand): Observable<boolean> {
		const uri = `${environment.pathHobbia}Usuario`;
		return this.http.post<boolean>(uri, body);
	}
	Edit(body: UserUpdateorCreateCommand): Observable<boolean> {
		const uri = `${environment.pathHobbia}Usuario`;
		return this.http.put<boolean>(uri, body);
	}
	Delete(documentNumber: string): Observable<boolean> {
		const uri = `${environment.pathHobbia}Usuario/${documentNumber}`;
		return this.http.delete<boolean>(uri);
	}
}

export interface UserUpdateorCreateCommand {

}
