export interface Usuario{
    id: number;
    documentNumber:string;
    documentTypeId:number;
    documentTypeName: string;
    name:string;
    fathersLastName :string;
    mothersLastName :string;
    address :string;
    regionCode :string;
    provinceCode :string;
    ubigeoCode :string;
    location:string;
    phone :string;
    email :string;
    password :string;
    active :boolean;
}
