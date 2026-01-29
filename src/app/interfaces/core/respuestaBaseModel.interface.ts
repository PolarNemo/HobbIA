export interface RespuestaBaseModel<T>{
    id: number;
    respuestaCorrecta: boolean;
    codigoRespuesta: number;
    mensajeRespuesta: string;
    objRespuesta: T;
}
