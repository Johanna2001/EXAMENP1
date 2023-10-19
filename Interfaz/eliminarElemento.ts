import { Ifunction } from './interface';

function eliminarElemento(arr: Ifunction[], elementoId: number) {
    const elemento = arr.find(elemento => elemento.id === elementoId);

    if (elemento) {
        elemento.status = "eliminado";
    }
}

const arregloElementos: Ifunction[] = [
    {
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
    },
    {
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
    },
    {
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
    }
];

const elementoIdEliminar = 2; 

eliminarElemento(arregloElementos, elementoIdEliminar);

console.log("Arreglo de elementos después de eliminar:");
console.log(arregloElementos);