import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { RespuestaBaseModel } from "../../interfaces/core/respuestaBaseModel.interface";
import { Actividad } from "../../interfaces/usuario/actividad.interface";

@Injectable({
	providedIn: "root",
})
export class ActividadService {

  private readonly http = inject(HttpClient);

	constructor() {}

	ListarActividad(): Observable<RespuestaBaseModel<Actividad[]>> {
		const uri = `${environment.pathHobbia}/Actividad/ListarActividad`;
		//const uri = `http://192.168.18.4/api/Producto/ListarProductos`;
		return this.http.get<RespuestaBaseModel<Actividad[]>>(uri);
	}

  EliminarActividad(actividadId : number) : Observable<RespuestaBaseModel<boolean>> {
		const uri = `${environment.pathHobbia}/Actividad/${actividadId}`;
		return this.http.delete<RespuestaBaseModel<boolean>>(uri);
  }

  EditarActividad(bodyActividad :
    {
      actividadId : number, nombre : string, descripcion : string, nivelDeDificultad : number, edadRecomendad : number
    }) : Observable<RespuestaBaseModel<boolean>> {
		const uri = `${environment.pathHobbia}/Actividad`;
		return this.http.put<RespuestaBaseModel<boolean>>(uri, { body: bodyActividad } );
  }

  RegistrarActividad(bodyActividad :
    {
      codigo : string, nombre : string, descripcion : string, nivelDeDificultad : number, edadRecomendad : number
    }) : Observable<RespuestaBaseModel<boolean>> {
		const uri = `${environment.pathHobbia}/Actividad`;
		return this.http.post<RespuestaBaseModel<boolean>>(uri, { body: bodyActividad } );
  }
}
