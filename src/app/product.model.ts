export interface Product{
name: string;
price: number;
image: string;
quantity?:number;
//quantity tiene signo de pregunta porque indica que puede estar o no en el modelo
}
//hay que exportar el modelo para que se visible y se pueda importar donde este siendo utilizzado el modelo
