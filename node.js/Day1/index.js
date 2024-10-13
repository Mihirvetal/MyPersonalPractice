import { appendFileSync, readFileSync, writeFileSync} from 'fs';
import { add,sub } from './calc.js';
// this help to read the file & utf8 is means a txt file

const data = readFileSync("sample.txt", 'utf-8');

console.log(data);



// to create new txt file 

writeFileSync("new.txt" , 'mihir 2' , 'utf-8');

// to add data in existing file
appendFileSync('new.txt','\nnew data', 'utf-8');


// done with the help of export from class.js and import in indexedDB={.js}
// file manipulation
const adding = add (12 , 2);
console.log(adding);

