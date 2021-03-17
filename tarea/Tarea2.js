
var cadena = prompt("Digite su palabra  para ver si es palindrome y verla al reves : ");
var palabra2 = "";
   
//Itero la cadena de manera inversa
for(var i = cadena.length-1; i>=0; i--)
{
  //Voy concatenando el valor a la cadena resultado
  palabra2 += cadena[i];
}

//Aqui use el if y el else para hacer las comparaciones
if (cadena === palabra2){
    alert("Eso es un Palindrome.");
}

else{
    alert("Eso no es un Palindrome.");
}

alert("Palabra al reves: "+ palabra2);


function permutaciones(string, raiz = '') {
  if (string.length == 1) {     // último caso
      return [raiz + string];
  } else {
      let res = [];
      for (let i=0; i < string.length; i++) {
          // ir tomando cada uno de los caracteres como raiz
          // como string va lo que está antes+después de ese caracter
          // obtener recursivamente el array de permutaciones
          res.push(
               ...permutaciones(string.substr(0,i) + string.substr(i+1), string[i])
                  .map(x=>raiz+x)
          );
      }
      return res;
  }
}

function distinct(array) { //eliminar repetidos en array
  return [...new Set(array)];
}

function anagramas(string) { // anagramas == permutaciones no repetidas
  return distinct(permutaciones(string));
}


// ------ Ejemplo ------ //
var resultado = anagramas(cadena);

console.log(resultado); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]