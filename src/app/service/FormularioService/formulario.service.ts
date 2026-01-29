import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { RespuestaBaseModel } from "../../interfaces/core/respuestaBaseModel.interface";
import { Formulario } from "../../interfaces/usuario/formulario.interface";

@Injectable({
	providedIn: "root",
})
export class FormularioService {

  private readonly http = inject(HttpClient);

	constructor() {}

	ListarFormulario(): Observable<RespuestaBaseModel<Formulario[]>> {
		const uri = `${environment.pathHobbia}Formulario/ListarFormulario`;
		return this.http.get<RespuestaBaseModel<Formulario[]>>(uri);
	}

  EliminarFormulario(actividadId : number) : Observable<RespuestaBaseModel<boolean>> {
		const uri = `${environment.pathHobbia}Formulario/${actividadId}`;
		return this.http.delete<RespuestaBaseModel<boolean>>(uri);
  }

  EditarFormulario(bodyActividad :
    {
      actividadId : number, nombre : string, descripcion : string, nivelDeDificultad : number, edadRecomendad : number
    }) : Observable<RespuestaBaseModel<boolean>> {
		const uri = `${environment.pathHobbia}Actividad`;
		return this.http.put<RespuestaBaseModel<boolean>>(uri, { body: bodyActividad } );
  }

  RegistrarFormulario(bodyActividad :
    {
      codigo : string, nombre : string, descripcion : string, nivelDeDificultad : number, edadRecomendad : number
    }) : Observable<RespuestaBaseModel<boolean>> {
		const uri = `${environment.pathHobbia}Actividad`;
		return this.http.post<RespuestaBaseModel<boolean>>(uri, { body: bodyActividad } );
  }
}
