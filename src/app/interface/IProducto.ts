export interface IProducto {
    id: number;
    nombre:string;
    cantidad: number;
    precio: number;


}

export class Producto implements IProducto{

    constructor(public id: number, public nombre:string, public cantidad: number, public precio: number ){

    }

    
}