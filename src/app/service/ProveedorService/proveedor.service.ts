import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { RespuestaBaseModel } from "../../interfaces/core/respuestaBaseModel.interface";
import { Proveedor } from "../../interfaces/core/proveedor.interface";

@Injectable({
	providedIn: "root",
})
export class ProveedorService {

  private readonly http = inject(HttpClient);

	constructor() {}

  ListarProveedores(): Observable<RespuestaBaseModel<Proveedor[]>> {
    const uri = `${environment.pathHobbia}Proveedor/ListarProveedor`;
    return this.http.get<RespuestaBaseModel<Proveedor[]>>(uri);
  }

  EliminarProveedor(actividadId : number) : Observable<RespuestaBaseModel<boolean>> {
    const uri = `${environment.pathHobbia}Proveedor/${actividadId}`;
    return this.http.delete<RespuestaBaseModel<boolean>>(uri);
  }

  EditarProveedor(bodyProveedor :
    {
      proveedorId : number, nombre : string, direccion : string, nivelDeProveedor : number, categoriaVenta : number
    }) : Observable<RespuestaBaseModel<boolean>> {
    const uri = `${environment.pathHobbia}Proveedor`;
    return this.http.put<RespuestaBaseModel<boolean>>(uri, { body: bodyProveedor } );
  }

  RegistrarProveedor(bodyProveedor :
    {
      nombre : string, direccion : string, nivelDeProveedor : number, categoriaVenta : number
    }) : Observable<RespuestaBaseModel<boolean>> {
    const uri = `${environment.pathHobbia}Proveedor`;
    return this.http.post<RespuestaBaseModel<boolean>>(uri, { body: bodyProveedor } );
  }
}
