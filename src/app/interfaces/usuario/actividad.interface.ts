export interface Actividad{
    id: number;
    codigo:string;
    nombre:string;
    descripcion: string;
    nivelDeDificultad:number;
    duracionEstimada :number;
    edadRecomendad :number;
    objetivos :string;
    materiales :string;
    costoEstimadoMinimo :number;
    costoEstimadoMaximo :number;
    etiquetas :string;
    fechaCreacion :Date;
}
