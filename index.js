// Iteration 1: Names and Input
let driver = 'Alejandro'
let navigator = 'Margarita'
console.log (`The driver's name is ${driver}`) 
console.log (`The navigator's name is ${navigator}`) 
// Iteration 2: Conditionals

if (driver.length > navigator.length) {
  console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (navigator.length > driver.length) {
  console.log(`It seems the navigator has the longest name, it has ${navigator.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
}

// Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let driverNameUpper = '';
for (let i = 0; i < driver.length; i++) {
  driverNameUpper += driver[i].toUpperCase() + ' ';
}
console.log(driverNameUpper); 
//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let navigatorNameReversed = '';
for (let i = navigator.length - 1; i >= 0; i--) {
  navigatorNameReversed += navigator[i];
}
console.log(navigatorNameReversed);

//3.3 Depending on the lexicographic order of the strings, print:

if (driver < navigator) {
    console.log("The driver's name goes first.");
  } else if (driver > navigator) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

//3.2 --> Teneis que recorrer un string en orden inverso

//3.3 --> buscar como saber cual es el orden de dos strings

//Bonus 1. Solamente usar loops

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales augue nulla, eget feugiat nulla facilisis id. Maecenas dolor tortor, laoreet a est vitae, hendrerit aliquam dui. Maecenas pellentesque et sapien vitae facilisis. Sed nec orci id erat fringilla rutrum sed vitae est. Curabitur maximus ac dui vitae rhoncus. Aenean nec nisi non purus ullamcorper auctor nec vel nulla. Vivamus id volutpat diam. Nunc id eros odio. Donec in velit interdum, feugiat arcu at, tincidunt dolor. Suspendisse potenti."
let numWords = 0;

let numEt = 0;

for (let i = 0; i < longText.length; i++) {
    // Cada vez que encontramos un espacio en blanco podemos considerar que hay una palabra nueva
    if (longText[i] == " ") {
        numWords++;
        // Esto tiene su cosa. Con el método slice "cortamos" la el string longText tres posiciones por detras del espacio encontrado hasta la siguiente posición de espacio en blanco. Si el substring resultante es " et " entonces hemos encontrado la palabra "et" e incrementamos la variable numEt 
        // https://oscarm.tinytake.com/media/173b71b?filename=1741810648874_TinyTake12-03-2025-09-15-51_638774074476298658.png&sub_type=thumbnail_preview&type=attachment&width=1196&height=216
        if (longText.slice(i - 3, i + 1) == " et ") {
            numEt++;
        }
    }
}


console.log("[BONUS 1]: Número total de palabras: ", numWords);
console.log("[BONUS 1]: Número total de palabras 'et' : ", numEt);

//Bonus 2

let phraseToCheck ="asa";
let palabraAlReves = "";


for (let i=phraseToCheck.length-1;i>=0;i--) {
    palabraAlReves = palabraAlReves + phraseToCheck[i];
}
if (palabraAlReves == phraseToCheck) {
    console.log("Iteration Bonus 2: ", `${phraseToCheck} es un palíndromo.` );
} else {
    console.log("Iteration Bonus 2: ", `${phraseToCheck} NO es un palíndromo.` );

}
