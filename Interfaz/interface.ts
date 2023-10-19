export interface Ifunction{
    id: number;
    name: string;
    returnType: string;
    detail: string;
    status: string;
    paramenters: IParameter[];
}

export interface IParameter{
    id: number;
    description: string;
    type: string;
    defaultValue: string;
    functionID: Number;
}


const function1: Ifunction = {
    id: 1,
    name: "suma",
    returnType: "number",
    detail: "Esta función suma dos números",
    status: "active",
    paramenters: [
        {
            id: 1,
            description: "primer numero",
            type: "number",
            defaultValue: "0",
            functionID: 1
        },
        {
            id: 2,
            description: "Segundo numero",
            type: "number",
            defaultValue: "0",
            functionID: 1
        }
    ]
};


/* Elemento 2 */
const funcion2: Ifunction = {
    id: 2,
    name: "restar",
    returnType: "number",
    detail: "Esta función resta dos números",
    status: "activo",
    paramenters: [
        {
            id: 1,
            description: "Primer número",
            type: "number",
            defaultValue: "0",
            functionID: 2
        },
        {
            id: 2,
            description: "Segundo número",
            type: "number",
            defaultValue: "0",
            functionID: 2
        }
    ]
};


/* Elemento 3 */

const funcion3: Ifunction = {
    id: 3,
    name: "esPar",
    returnType: "boolean",
    detail: "Esta función verifica si un número es par",
    status: "activo",
    paramenters: [
        {
            id: 1,
            description: "Número de entrada",
            type: "number",
            defaultValue: "0",
            functionID: 3
        }
        
    ]
};


