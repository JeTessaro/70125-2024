const mostrarLista = (lista = []) =>{
    if(lista.length === 0){
        return "Lista vacía";
    }
   lista.forEach(elemento => {
    console.log(elemento);
   }); 
   //lista.forEach(elemento => console.log(elemento)); esto eigual a la anterior
   let cantElementos = lista.length;

   return cantElementos;
}

let lista1 = [1,2,5,88];
let lista2 = [21,52,85,82];
let lista3 = [];

let resultado1 = mostrarLista(lista1);
console.log(`El largo de la lista1 es: ${resultado1}`);

let resultado2 = mostrarLista(lista2);
console.log(`El largo de la lista2 es: ${resultado2}`);

let resultado3 = mostrarLista(lista3);
console.log(`El largo de la lista3 es: ${resultado3}`);

let resultadoVacio = mostrarLista();
console.log(`Resultado vacio es igual ${resultadoVacio}`);