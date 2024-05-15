//Declaramos la constante prompt para soliucitarle datos al usuario
const prompt = require("prompt-sync")();

const nameArray = [];
let i = 0;
let flag = true;

while (flag) {
  const name = prompt("Ingresa un nombre: ");
  //Validamos que tenga un valor para que se pueda ingresar al arreglo
  if (name.length != 0) {
    nameArray[i] = name;
    i++;
  } else {
    // 1. Cuantos nombres se ingresaron
    console.log("Cantidad de nombres ingresados:", nameArray.length);
    // 2. Si exite almenos un valor repetido o no
    const namesEquals = searchEqualValues(nameArray);
    console.log("La cantidad de nombres repetidos es:", namesEquals);
    // 3. Cual es el nombre más largo de todos los ingresados
    const nameLongest = longestName(nameArray);
    console.log("El nombre más largo es:", nameLongest);
    // 4. Cual es el nombre más corto de todos los ingresados
    const nameShortest = shorterName(nameArray);
    console.log("El nombre más corto es:", nameShortest);
    //Cambio de condición para salir del ciclo
    flag = false;
  }
}

function shorterName(array) {
  let nameShort = array[0];
  array.forEach((element) => {
    if (element.length < nameShort.length) nameShort = element;
  });
  return nameShort;
}

function longestName(array) {
  let nameLong = "";
  array.forEach((element) => {
    if (element.length > nameLong.length) nameLong = element;
  });
  return nameLong;
}

function searchEqualValues(array) {
  const count = {};
  array.forEach((element) => {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  });
  return count;
}
